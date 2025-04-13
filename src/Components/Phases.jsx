import { useState } from "react";
const phases = [
  {
    phase: "0",
    period: "Early Access",
    desc: "Earn Anti-Inflation Airdrop",
    date: "Feb 2024",
  },
  {
    phase: "1",
    period: "preseason",
    desc: "Prepare for Phase 1",
    date: "May 2024",
    current: true
  },
  {
    phase: "1",
    period: "App launch",
    desc: "Earn More Anti-Inflation Airdrop",
    date: "Late May 2024",
  },

];

const Phases = () => {
  return (
    <div>
      <div className="hidden lg:block grow"></div>
      <div className="my-[60px] lg:my-0 relative flex justify-between gap-[40px] pl-[40px] border-l-4 border-l-[#FF7AD166]/50">
        <div className="h-[180px] w-[4px] bg-[orchid] absolute left-[-4px] top-0"></div>
        <div className="flex flex-col gap-[50px] ">
          {phases.map((phase, index) => (
            <div key={index} className={`flex flex-col w-[230px] gap-[5px] ${phase.current ? 'opacity-100' : 'opacity-50'} `}>
              <h5 className="uppercase text-heading5  text-[#FFD02B] font-bold">
                Phase {phase.phase}: <br />
                {phase.period}
              </h5>
              <p className="text-[14px] text-white">
                {phase.desc}
              </p>
              <p className="uppercase text-[14px] font-bold text-white">
                {phase.date}
              </p>
            </div>
          ))}
          <div className="flex flex-col w-[230px] gap-[5px] opacity-50">
            <h5 className="uppercase text-heading5  text-[#FFD02B]">
              Phase 2: <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 78 25"
                className="w-[52px] h-[16px] inline-block"
              >
                <g filter="url(#stain_svg__a)">
                  <path
                    fill="#FF7AD1"
                    d="M15.721 23.88a82.828 82.828 0 0 0-1.413-.109c-1.424-.094-2.305-.163-2.424-.189a7.952 7.952 0 0 0-.585-.067 5.508 5.508 0 0 1-.605-.078 3.09 3.09 0 0 0-.404-.062 5.795 5.795 0 0 1-1.26-.244c-.134-.045-.262-.068-.284-.051-.022.016-.028.006-.013-.024.019-.037-.116-.06-.416-.075-.244-.01-.47-.035-.504-.052-.032-.017-.07-.113-.082-.212-.026-.206-.069-.238-.455-.339a3.875 3.875 0 0 1-.502-.176 3.529 3.529 0 0 0-.347-.138c-.166-.047-.163-.16.01-.378.183-.229.327-.324.62-.41.19-.055.45-.286.452-.401 0-.039-.174-.114-.422-.182a4.765 4.765 0 0 0-.483-.074 3.151 3.151 0 0 1-.59-.123c-.139-.051-.418-.09-.718-.1-.532-.017-.76-.097-.794-.28-.011-.063-.11-.161-.253-.25-.128-.081-.224-.167-.212-.19.012-.023-.002-.033-.032-.02-.13.053-.326-.066-.395-.24-.075-.192-.04-.368.073-.365.033.001.06-.015.06-.036.001-.022.124-.042.274-.045.15-.004.28-.028.288-.056.008-.027.048-.048.09-.046.04 0 .086-.02.1-.049.015-.028.045-.05.067-.05.022.001.031.02.02.042-.012.022.032.041.098.042.07.001.119-.026.12-.066 0-.037.019-.052.04-.034.022.018.04.01.041-.016.002-.08-.103-.112-.29-.09a.924.924 0 0 1-.354-.043 5.656 5.656 0 0 0-.241-.082.7.7 0 0 1-.131-.058.22.22 0 0 0-.152-.017c-.103.03-.137-.04-.057-.121.034-.034.061-.042.061-.017s.014.022.03-.006c.053-.085.216-.179.215-.122 0 .028.018.052.042.053.023.001.034-.017.024-.04-.027-.059.297-.057.379.002.043.031.084.028.114-.009.055-.066.218-.088.185-.024-.037.073.093.049.145-.028.037-.054.076-.06.15-.02.128.066.171.066.095 0-.045-.04-.024-.051.082-.045.078.005.278-.013.446-.04a4.95 4.95 0 0 1 .412-.052c.177-.005.13-.18-.106-.391-.135-.121-.2-.211-.184-.259.015-.047.04-.056.069-.025.024.026.081.03.126.009a.658.658 0 0 1 .233-.038c.116.001.167-.029.223-.133.092-.17.105-.265.055-.394-.022-.056-.024-.088-.004-.071s.062-.055.094-.159a.674.674 0 0 1 .103-.226c.025-.02-.027-.04-.116-.043-.12-.005-.146-.02-.1-.055.046-.037.03-.05-.07-.053a.448.448 0 0 1-.202-.055 8.86 8.86 0 0 0-.44-.252c-.41-.224-.648-.28-1.52-.356-.667-.058-.741-.07-.846-.146-.107-.077-.657-.202-1.006-.228a1.033 1.033 0 0 1-.463-.134 1.39 1.39 0 0 0-.381-.155c-.22-.045-.502-.183-.501-.245 0-.021.106-.08.235-.129.198-.076.366-.086 1.084-.066.573.017.9.005 1.004-.037.151-.059.296-.045.666.063.095.028.366.062.602.075.236.013.464.048.506.079.046.033.138.042.225.021a.597.597 0 0 1 .184-.022c.072.025 1.303.049 1.44.028.233-.035.525-.056.927-.068.208-.006.399-.035.424-.065.044-.053-.03-.083-.164-.065-.027.003-.05-.02-.049-.053 0-.033-.025-.048-.057-.033-.032.014-.08-.009-.107-.052-.039-.063-.055-.066-.083-.013-.028.054-.034.054-.034-.002 0-.043-.027-.058-.076-.04-.05.02-.085-.002-.102-.063-.014-.05-.005-.1.019-.11.062-.024.166-.157.167-.213.002-.08-.156-.267-.198-.235-.022.016-.028-.005-.015-.047.019-.057.003-.069-.067-.048-.073.022-.086.01-.064-.056.04-.123-.046-.166-.115-.058-.038.06-.052.066-.038.017.024-.086-.162-.23-.23-.179-.024.018-.03.006-.012-.028.016-.032.01-.059-.013-.06-.024 0-.044.034-.044.076-.003.11-.083.095-.084-.015 0-.077-.006-.075-.036.012-.019.056-.029.115-.022.13.006.016-.024.031-.067.034-.094.006-.099-.035-.013-.112.05-.044.015-.055-.164-.048-.134.005-.218-.011-.203-.04.013-.026-.012-.036-.057-.023-.048.015-.081 0-.08-.036 0-.033-.021-.044-.047-.025-.034.025-.039.007-.016-.062.019-.054.038-.13.044-.168.018-.12.122-.152.247-.076.066.04.098.074.07.075-.1.005-.05.106.052.11.076.002.1-.018.085-.074-.012-.042-.003-.09.02-.107.026-.02.022-.061-.01-.115-.043-.071-.041-.08.013-.052a.12.12 0 0 0 .122-.017c.045-.04.042-.044-.014-.023-.06.023-.067.005-.042-.113a.423.423 0 0 1 .063-.166c.06-.048-.003-.252-.068-.223-.043.02-.056-.001-.046-.07.011-.07-.006-.094-.066-.087-.044.004-.058-.004-.03-.019.029-.015.043-.047.032-.071-.011-.025.017-.076.062-.115.046-.038.071-.086.057-.105-.014-.02.009-.034.051-.033.064.001.067-.007.02-.049-.04-.033-.07-.03-.09.01-.016.032-.041.044-.055.026-.025-.034.054-.251.109-.297.044-.038.1-.273.057-.241-.02.015-.058-.016-.083-.07-.04-.088-.033-.097.065-.085.069.008.106-.011.1-.052-.004-.036.005-.062.022-.058.083.02.131-.01.133-.08 0-.042.02-.076.044-.076.024.001.033-.02.021-.046-.012-.027.001-.06.03-.073.03-.014.023-.027-.02-.03-.039-.004-.07-.025-.07-.047 0-.021-.063-.038-.14-.035-.078.002-.131-.017-.119-.042.013-.025-.015-.047-.062-.049-.047-.001-.074-.025-.06-.053.015-.028.005-.052-.02-.053-.028 0-.036-.037-.02-.085.022-.07.016-.074-.036-.02-.052.051-.063.048-.062-.015.001-.043.039-.09.083-.103.05-.014.083-.068.084-.133.002-.092-.016-.105-.11-.083-.091.022-.099.017-.04-.028.065-.05.064-.063-.015-.184-.046-.072-.111-.132-.144-.133-.122-.004-.012-.055.152-.07.098-.01.159.004.144.031-.013.027-.006.049.016.05.023 0 .05-.018.062-.041.012-.024.082-.036.155-.028.073.007.155-.007.181-.032.03-.028.058-.024.073.01.017.037.05.04.102.006a.321.321 0 0 1 .17-.042c.143.012.64-.029.675-.055.027-.02.47-.077.605-.078.07 0 .068-.244-.004-.316-.032-.032-.062-.124-.065-.203-.004-.089-.025-.135-.057-.12-.029.013-.04-.006-.027-.047.014-.045-.02-.083-.099-.107-.132-.042-.225-.158-.186-.234.014-.027-.011-.037-.057-.024-.058.018-.08 0-.08-.064a.131.131 0 0 0-.078-.118c-.09-.033-.103-.096-.031-.15.03-.022.036-.013.016.025-.016.033-.015.057.003.053.087-.016.134.017.133.091-.002.107.096.069.115-.045.008-.047 0-.084-.018-.08-.112.021-.175-.021-.173-.117.001-.059.02-.092.042-.073.022.018.04-.015.042-.073 0-.059.027-.106.058-.105.031.001.068-.034.082-.078.014-.043.009-.066-.012-.051-.02.015-.045-.002-.053-.038-.01-.036-.013-.025-.008.025.005.05-.007.09-.028.09-.02-.001-.036-.03-.035-.063 0-.034-.025-.017-.058.036-.043.073-.047.109-.013.137.026.022.01.034-.038.027-.074-.01-.124-.146-.052-.144.015 0 .04-.068.056-.153.021-.123.048-.154.13-.151.055.002.102-.02.102-.048 0-.029.038-.05.082-.05.086.003.107.08.037.132-.074.055-.006.116.122.106.165-.012.206-.07.057-.08-.115-.01-.116-.01-.016-.043l.102-.033-.09-.067c-.103-.076-.117-.166-.024-.163.034 0 .05.024.037.052-.015.028-.007.052.016.053.024 0 .044-.045.045-.102.001-.063.03-.103.07-.101.06.002.059-.008-.008-.074-.062-.061-.081-.063-.099-.01-.013.04-.05.05-.096.028-.07-.035-.07-.042-.005-.122.039-.047.096-.085.128-.084.052.002.077-.06.066-.166-.002-.021.024-.038.059-.036.035 0 .053-.02.04-.047-.028-.064.05-.122.104-.076.028.023.026.057-.007.106-.036.051-.037.072-.004.073.048.001.062-.061.051-.226-.008-.128.07-.182.255-.177.09.002.148-.02.143-.053-.006-.037.079-.056.234-.052.133.003.265-.016.294-.043.028-.027.104-.034.169-.015.083.024.132.009.171-.053.03-.048.038-.07.018-.049-.02.021-.086-.062-.147-.185-.06-.124-.11-.203-.11-.177-.001.025-.037.003-.08-.05-.044-.053-.079-.121-.077-.153.001-.03.02-.015.042.036.021.05.069.092.106.094.049.001.055-.014.022-.058a.167.167 0 0 1-.02-.134c.02-.061.03-.062.057-.005.024.052.033.043.034-.033.002-.13-.09-.299-.135-.25-.018.021-.02.009-.002-.027.016-.035.047-.05.067-.033.02.017.038.007.038-.021a.12.12 0 0 0-.037-.084c-.05-.042 0-.192.093-.273.042-.036.064-.09.05-.12-.016-.036.01-.04.071-.015.078.033.086.028.046-.029-.06-.084-.061-.24-.003-.263.04-.016.051-.105.039-.313-.003-.054-.04-.092-.09-.094-.048-.002-.065-.02-.04-.04.064-.053.105-.208.064-.242-.019-.016-.043 0-.054.036-.01.035-.03.051-.042.036-.013-.015-.007-.06.014-.1.031-.062.05-.058.119.025.08.097.081.097.086.001.003-.054.014-.07.024-.033.01.036.038.066.06.067.024 0 .033-.034.02-.077-.011-.042-.008-.073.008-.069a.379.379 0 0 0 .144-.048c.064-.03.133-.043.153-.026.02.017.037.005.037-.027s.018-.044.038-.027c.02.017.049.01.062-.017.014-.027.057-.048.095-.046.112.004.181-.022.368-.139.096-.06.2-.108.23-.107.031 0 .065-.027.074-.06.02-.068.397-.088.396-.022 0 .02.05.022.11.002.122-.039.38-.022.565.036.097.03.126.015.172-.088.03-.068.045-.147.032-.174-.032-.072-.305-.13-.75-.16-.212-.013-.424-.054-.472-.09-.049-.036-.103-.062-.12-.06-.018.004-.099.002-.18-.004-.11-.009-.15-.037-.165-.115-.016-.085 0-.104.088-.103.103.002.104-.001.031-.075-.067-.07-.036-.075.295-.054.203.014.37.039.37.056 0 .018.05.026.11.019.275-.032.694-.063.848-.062.093 0 .16-.018.15-.04-.01-.024.014-.045.055-.048.16-.011.197-.02.268-.057.04-.022.11-.126.155-.232.082-.194.214-.304.24-.2.009.04.031.04.074-.004.039-.039.07-.042.087-.01.028.055.68.077.723.025.014-.017.046-.007.072.021.05.056.294.055.369 0 .024-.019.107-.01.183.02s.474.077.884.104c.41.028.982.07 1.27.093 1.557.127 2.032.156 3 .182.761.02 1.061.045 1.06.087 0 .042.014.043.053.003.055-.055.299-.061 1-.027.21.01.402.018.424.016l.486-.038c.245-.02.476-.022.513-.006.037.016.076.01.089-.014.012-.024.173-.043.358-.044.185 0 .44-.02.568-.045.128-.024.465-.047.75-.05.284-.004.644-.012.8-.017.156-.006.317.013.358.041.041.03.065.032.053.006-.012-.027.149-.04.37-.03.216.01.456-.009.534-.04.108-.043.15-.042.172.003.02.042.029.043.03.004 0-.035.114-.057.295-.059.401-.003 1.622.032 1.87.053.11.01.366.008.566-.003.484-.027 1.234-.018 1.234.014-.001.04.193.028.518-.032.163-.03.345-.037.405-.014.14.052.411.073.412.033 0-.018.05-.03.112-.028 1.13.038 3.265.01 3.337-.043.017-.013.031-.003.03.022 0 .025.054.038.121.027.067-.01.153 0 .192.022.089.052.25.072.231.03-.008-.017.298-.017.68.002.383.018.696.037.696.042 0 .005.113.017.252.027.139.01.253.004.253-.015 0-.018.064-.012.142.013.077.025.149.029.159.01.01-.02.183-.03.385-.022.218.01.366-.006.367-.036.001-.03.014-.029.03.005.036.071.341.077.383.008.021-.034.031-.033.03.001 0 .029.069.051.152.05.084 0 .194.021.245.047a.174.174 0 0 0 .168 0c.072-.047.242-.061 1.115-.095.223-.008.587-.03.81-.048.223-.019.724-.026 1.113-.017.39.009.78.001.87-.017.09-.019.581-.025 1.093-.013 1.2.026 2.105.014 2.465-.034l.753-.1c.257-.035.685-.083.953-.107.267-.024.568-.053.669-.064.328-.036.663-.015.933.058.17.046.69.084 1.446.108.65.02 1.193.048 1.208.06.016.012.701.06 1.523.105.823.045 1.64.098 1.818.117.997.108 1.755.152 3.415.2.233.007.488.022.565.033.168.025.946.095 1.676.151 1.579.122 2.168.162 3.232.216.645.033 1.235.074 1.313.092.077.018.286.046.464.062.329.03.704.1.752.139.015.011.151.037.303.057.151.02.384.062.517.093.133.032.296.069.362.082.066.014.268.08.449.145.18.066.366.121.412.123.046.001.084.022.083.045 0 .024.022.044.05.046.273.012.925.112 1.028.158a.547.547 0 0 1 .212.215c.09.17.332.343.555.398.28.069.763.142.865.131.057-.006.103.014.102.045 0 .03.012.04.027.022.016-.02.065.012.11.07.046.057.204.19.352.294.216.153.327.197.556.221.303.032.357.078.323.278-.022.127-.185.226-.362.22-.05-.001-.104.02-.119.048-.014.028-.087.05-.163.047-.212-.007-.547.087-.547.154 0 .11.305.255.606.287.163.018.542.054.842.08.605.054.669.07.699.178.044.16-.522.678-.983.9-.15.072-.225.146-.276.27-.09.211-.05.314.189.506.093.074.169.17.168.213-.001.044.025.115.057.159.092.124.067.248-.07.346-.069.049-.205.18-.303.293-.148.17-.21.206-.376.216-.146.01-.217.042-.268.125-.039.062-.062.13-.052.153.01.022 0 .04-.022.04-.023-.001-.064.05-.091.113-.028.063-.036.099-.019.08.043-.05.152.105.12.168-.016.03.004.04.047.027.04-.013 0 .02-.09.074a.68.68 0 0 1-.293.094.645.645 0 0 0-.234.045c-.077.034-.104.03-.104-.017 0-.035-.02-.024-.042.024-.08.165-.007.348.193.486a.874.874 0 0 1 .25.254.481.481 0 0 0 .217.191c.324.136.37.405.084.5a.32.32 0 0 0-.214.404c.026.095.024.137-.005.136-.075-.002-.148.124-.147.252.002.126-.001.128-.344.217a.628.628 0 0 0-.225.158 1.499 1.499 0 0 1-.237.202c-.062.039-.113.104-.114.145-.002.096-.149.19-.324.208-.19.02-.27.08-.28.217-.01.114.146.362.228.364.05.002.273.307.272.371-.002.089-.149.145-.431.165-.155.01-.372.041-.484.068-.185.044-.846.166-.996.183-.063.008-.094.191-.033.194.018 0 .014.043-.01.096-.022.052-.03.112-.014.132.05.068.02.724-.038.797-.03.038-.138.074-.24.08-.166.008-.277.085-.24.167.006.016-.014.058-.046.094-.031.035-.057.047-.057.026 0-.02-.02-.011-.048.021-.035.044-.062.044-.1.001-.039-.043-.086-.042-.176.002-.206.101-.142.26.135.332.31.082.38.12.33.179-.013.016-.3.027-.639.025-.72-.003-.803.036-.87.413a1.714 1.714 0 0 1-.138.413c-.09.174-.162.4-.169.533-.001.029-.064.058-.138.064-.094.009-.144.043-.159.11-.012.055-.038.086-.058.07-.019-.016-.035-.006-.036.023 0 .029-.084.111-.186.183-.29.205-.333.378-.122.488.099.052.103.091.031.308-.052.159.08.265.513.418.42.147.536.244.413.343-.076.061-.624-.017-1.485-.212-.39-.089-.556-.054-.646.137-.09.19-.184.244-.453.262-.223.015-.432.15-.435.278-.001.08.177.16.383.173.155.01.337.153.246.193a.407.407 0 0 0-.113.097c-.034.041-.061.061-.06.044 0-.062-.248.126-.299.225-.063.125-.275.291-.36.283-.207-.023-.484.003-.485.045-.002.08.207.317.25.284.022-.016.028-.005.012.025-.016.03-.01.071.013.09.022.019.03.057.016.084-.014.027-.004.085.023.129.076.123-.001.17-.31.187a3.155 3.155 0 0 0-.466.061c-.101.025-.439.087-.751.138-.313.052-.67.135-.796.185a1.376 1.376 0 0 1-.477.083 1.944 1.944 0 0 0-.545.087c-.279.09-.374.092-1.71.022a68.503 68.503 0 0 1-1.757-.107c-.492-.049-1.096-.124-1.18-.148-.038-.01-.511-.05-1.05-.087-.77-.052-1.097-.053-1.527-.004-.301.035-.854.067-1.23.072-.375.005-.748.017-.83.027-.28.035-1.243.085-1.807.095-.312.006-.877.022-1.255.037-.379.014-1.143.026-1.7.025-.556 0-1.066.005-1.133.012-.066.007-.523.015-1.015.017-.492.002-.947.01-1.012.018-.124.015-.43.032-1.514.084-.851.04-1.49.094-2.018.17-.229.032-.486.057-.571.054a.847.847 0 0 0-.273.04 1.755 1.755 0 0 1-.373.063c-.141.01-.433.06-.65.108-.216.05-.503.099-.637.11-.133.01-.38.038-.547.06-.167.022-.414.048-.547.058-.134.01-.441.048-.683.084-.242.036-.589.074-.77.085-.182.01-.436.034-.563.051a6.813 6.813 0 0 1-.73.025 7.614 7.614 0 0 0-.8.032c-.33.04-1.032.066-1.578.058a3.156 3.156 0 0 0-.527.033c-.1.02-.792.03-1.537.02-.746-.009-1.395-.007-1.442.004-.049.011-.44.024-.87.03-.431.005-.875.013-.986.019-.112.005-.521.013-.91.018-.39.005-.864.018-1.053.03-.19.013-.363.017-.385.008a6.311 6.311 0 0 0-.627.022c-.323.02-.77.044-.992.052-.223.008-.469.023-.547.032-.078.009-.388.023-.688.032-.3.008-.556.022-.567.03a5.12 5.12 0 0 1-.527.033 7.21 7.21 0 0 0-.587.035c-.082.018-2.947-.008-4.186-.038a26.228 26.228 0 0 1-1.354-.076m-8.204-6.666c.02-.001.004-.05-.036-.11-.062-.092-.113-.107-.355-.102-.155.003-.29.03-.298.06-.022.08.257.177.47.164zm1.01-2.792c0-.012-.018-.023-.04-.024-.022 0-.04.023-.041.053-.001.03.017.041.04.024.022-.016.04-.04.041-.053m-2.03-1.609c0-.011-.028-.035-.063-.053-.035-.019-.052-.01-.038.019.023.05.1.076.1.034m.482-1.633c-.04-.052-.044-.046-.024.029.015.05.037.08.05.065.012-.016 0-.058-.026-.094m.335-.61c-.039-.051-.043-.046-.023.029.014.051.036.08.05.065.012-.015 0-.057-.027-.093m-.302-.306c-.013-.029-.032-.053-.042-.053-.01 0-.018.023-.019.051 0 .029.019.053.042.053.024.001.032-.022.02-.05m1.654-2.412c-.03-.016-.064-.015-.078.002-.014.016.01.03.053.028.047 0 .057-.012.025-.03m-.005-.136c-.06-.067-.157-.271-.156-.33 0-.019.028-.003.061.034.079.088.127.029.062-.076-.057-.093-.162-.024-.164.107-.001.04-.016.062-.033.047-.018-.014-.035.019-.04.074-.005.066.018.1.07.102.044.001.079.026.078.054 0 .029.04.052.09.053.078.001.083-.008.032-.065m-.24-.118c0-.013.018-.037.04-.053.023-.017.041-.006.04.024 0 .03-.018.054-.04.053-.023 0-.04-.011-.04-.024m.736-1.052c.003-.064-.003-.087-.014-.052-.012.035-.037.05-.057.034-.02-.016-.026.007-.014.051.033.118.077.1.085-.033m-.207-.05c.045-.088-.004-.108-.061-.025-.033.048-.037.078-.01.079.024 0 .055-.023.07-.053m1.347-1.73c0-.012-.027-.035-.06-.053-.033-.017-.06-.009-.06.019-.001.027.026.05.06.052.033 0 .06-.007.06-.019M3.474 18.323c0-.027.02-.063.042-.08.022-.017.04.006.04.05-.002.044-.02.08-.043.08-.022-.001-.04-.024-.04-.05m1.733-4.197c.024-.029.067-.042.096-.029.03.014.011.037-.044.054-.068.02-.083.013-.053-.025m.575.028c-.042-.037-.045-.054-.01-.058.09-.01.111-.017.16-.055.027-.02.062-.01.077.024.018.038.011.047-.018.023-.027-.023-.046-.006-.047.042-.002.091-.073.101-.162.024m-.206-.123c.031-.039.06-.04.086-.006.026.035.01.054-.047.058-.065.004-.075-.009-.04-.052m1.032-.758c.001-.045.02-.066.042-.048a.12.12 0 0 1 .038.082c0 .027-.019.048-.04.047-.023 0-.04-.037-.04-.082m.062-.863c.07-.16.077-.164.067-.043-.005.06-.033.12-.062.133-.043.019-.044 0-.005-.09m.279-1.888c-.034-.028-.014-.052.06-.073.136-.04.162-.015.064.06-.041.03-.097.036-.124.013m.886-3.47c.014-.016.05-.017.078-.001.032.017.022.03-.025.03-.043.001-.066-.012-.053-.029m.126-.202c.014-.017.048-.018.077-.002.032.018.022.03-.025.03-.042.001-.066-.012-.052-.028m.733-.64c0-.054.01-.084.022-.066.014.017.014.062.002.099-.014.04-.023.028-.024-.032m1.469-2.826c-.036-.031-.04-.052-.012-.051.027 0 .06.024.072.053.03.065.016.065-.06-.002"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="stain_svg__a"
                    width="78"
                    height="25"
                    x="0"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      result="effect1_foregroundBlur_745_30731"
                      stdDeviation="0.5"
                    ></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
              Launch
            </h5>
            <p className="text-[14px] text-white">
              Redeem Anti-Inflation Airdrop
            </p>
            <p className="uppercase text-[14px] font-bold text-coriander-600 blur">
              XXXX XXXX
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block grow"></div>
    </div>
  );
};

export default Phases;
