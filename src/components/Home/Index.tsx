import { useRef } from "react";
import { Header } from "../Header/Index";

import { IoMdCopy } from "react-icons/io";

export function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  const divRef1 = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);
  const divRef4 = useRef<HTMLDivElement>(null);
  const divRef5 = useRef<HTMLDivElement>(null);
  const divRef6 = useRef<HTMLDivElement>(null);
  const divRef7 = useRef<HTMLDivElement>(null);
  const divRef8 = useRef<HTMLDivElement>(null);
  const divRef9 = useRef<HTMLDivElement>(null);
  const divRef10 = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    const divContent = divRef.current?.innerText;
    navigator.clipboard
      .writeText(divContent!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard1 = () => {
    const divContent1 = divRef1.current?.innerText;
    navigator.clipboard
      .writeText(divContent1!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard2 = () => {
    const divContent2 = divRef2.current?.innerText;
    navigator.clipboard
      .writeText(divContent2!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard3 = () => {
    const divContent3 = divRef3.current?.innerText;
    navigator.clipboard
      .writeText(divContent3!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard4 = () => {
    const divContent4 = divRef4.current?.innerText;
    navigator.clipboard
      .writeText(divContent4!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard5 = () => {
    const divContent5 = divRef5.current?.innerText;
    navigator.clipboard
      .writeText(divContent5!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard6 = () => {
    const divContent6 = divRef6.current?.innerText;
    navigator.clipboard
      .writeText(divContent6!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard7 = () => {
    const divContent7 = divRef7.current?.innerText;
    navigator.clipboard
      .writeText(divContent7!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard8 = () => {
    const divContent8 = divRef8.current?.innerText;
    navigator.clipboard
      .writeText(divContent8!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard9 = () => {
    const divContent9 = divRef9.current?.innerText;
    navigator.clipboard
      .writeText(divContent9!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };
  const copyToClipboard10 = () => {
    const divContent10 = divRef10.current?.innerText;
    navigator.clipboard.writeText(divContent10!)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };



    const obterDataAtual = () => {
      const data = new Date();
      const dia = ("0" + data.getDate()).slice(-2); // Adiciona zero à frente e pega os últimos 2 caracteres
      const mes = ("0" + (data.getMonth() + 1)).slice(-2); // Adiciona zero à frente e pega os últimos 2 caracteres
      const ano = data.getFullYear();
  
      return `${dia}/${mes}/${ano}`;
    };

  return (
    <div className="Container">
      <Header />
      <div>
        <main>
          <nav>
            <h1 className="title">
              LOJAS AS{" "}
              <span style={{ color: "#7a49e5", fontSize: "56px" }}>18h:30</span>{" "}
              <span style={{ color: "#7a49e5", fontSize: "16px" }}>
                SEG-SEX
              </span>
            </h1>

            <div className="nav-right">
              <h3>DATA</h3>
              <h3>STATUS</h3>
            </div>
          </nav>

          <p className="subTitle">
            Importação de Cadastro e Preços GMCORE (Carga total antes da
            Parcial)
          </p>

          <div className="filiais">
            <ul>
              <li style={{ color: "yellow" }}>CARGA TOTAL : </li>
              <li>LINHA 1</li>
              <li>LINHA 2</li>
              <li>LINHA 3</li>
              <li>LINHA 4</li>
              <li>LINHA 5</li>
              <li>LINHA 6</li>
              <li>LINHA 7</li>
              <li>LINHA 8</li>
              <li>LINHA 9</li>
              <li>LINHA 10</li>
            </ul>

            <ul>
              <div>
                <div
                  className="filial"
                  ref={divRef}
                  style={{ color: "yellow" }}
                >
                  9
                </div>
                <button onClick={copyToClipboard}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef1}>
                  9, 13, 55, 56, 57, 62, 65, 66, 67, 68
                </div>
                <button onClick={copyToClipboard1}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef2}>
                  69, 71, 72, 73, 74, 75, 76, 77, 79, 124
                </div>
                <button onClick={copyToClipboard2}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef3}>
                  125, 126, 127, 128, 129, 131, 132, 133, 134, 135{" "}
                </div>
                <button onClick={copyToClipboard3}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef4}>
                  137, 138, 139, 140, 142, 143, 144, 145, 146, 149
                </div>
                <button onClick={copyToClipboard4}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef5}>
                  150, 151, 152, 153, 154, 156, 157, 158, 160, 161
                </div>
                <button onClick={copyToClipboard5}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef6}>
                  162, 163, 164, 165, 166, 167, 168, 169, 170, 171
                </div>
                <button onClick={copyToClipboard6}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef7}>
                  172 ,173, 174, 175, 176, 177, 178, 180, 181, 182
                </div>
                <button onClick={copyToClipboard7}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef8}>
                  183, 186, 187, 189, 190, 191, 192, 193, 195, 196
                </div>
                <button onClick={copyToClipboard8}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef9}>
                  197, 601,602, 603, 605, 606, 608, 609, 610, 616
                </div>
                <button onClick={copyToClipboard9}>
                  <IoMdCopy />
                </button>
              </div>

              <div>
                <div className="filial" ref={divRef10}>
                  618, 621, 622, 623, 624, 625, 626, 627, 631, 632, 633, 634,
                  635, 636
                </div>
                <button onClick={copyToClipboard10}>
                  <IoMdCopy />
                </button>
              </div>
            </ul>

            <ul className="data">
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
            </ul>

            <ul className="checkbox_content">
              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-1" />
                <label htmlFor="cb-1">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-2" />
                <label htmlFor="cb-2">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-3" />
                <label htmlFor="cb-3">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-4" />
                <label htmlFor="cb-4">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-5" />
                <label htmlFor="cb-5">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-6" />
                <label htmlFor="cb-6">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-7" />
                <label htmlFor="cb-7">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-8" />
                <label htmlFor="cb-8">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-9" />
                <label htmlFor="cb-9">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-10" />
                <label htmlFor="cb-10">Congelada</label>
              </div>


            </ul>
          </div>

          <p style={{ color: "yellow", marginTop: "20px" }}>
            TODOS OS DIAS FAZER A CONFIG DOS ELETROS APOS OS PROCESSOS.
          </p>
        </main>

      </div>
    </div>
  );
}
