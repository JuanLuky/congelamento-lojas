import { Header } from "../Header/Index";

import { IoMdCopy } from "react-icons/io";

export function Home() {
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
                <div className="filial" style={{ color: "yellow" }}>
                  9
                </div>
                <CopyToClipboardButton content="9" />
              </div>

              <div>
                <div className="filial">
                  9, 13, 55, 56, 57, 62, 65, 66, 67, 68
                </div>
                <CopyToClipboardButton content="9, 13, 55, 56, 57, 62, 65, 66, 67, 68" />
              </div>

              <div>
                <div className="filial">
                  69, 71, 72, 73, 74, 75, 76, 77, 79, 124
                </div>
                <CopyToClipboardButton content="69, 71, 72, 73, 74, 75, 76, 77, 79, 124" />
              </div>

              <div>
                <div className="filial">
                  125, 126, 127, 128, 129, 131, 132, 133, 134, 135{" "}
                </div>
                <CopyToClipboardButton content="125, 126, 127, 128, 129, 131, 132, 133, 134, 135" />
              </div>

              <div>
                <div className="filial">
                  137, 138, 139, 140, 142, 143, 144, 145, 146, 149
                </div>
                <CopyToClipboardButton content="137, 138, 139, 140, 142, 143, 144, 145, 146, 149" />
              </div>

              <div>
                <div className="filial">
                  150, 151, 152, 153, 154, 156, 157, 158, 160, 161
                </div>
                <CopyToClipboardButton content="150, 151, 152, 153, 154, 156, 157, 158, 160, 161" />
              </div>

              <div>
                <div className="filial">
                  162, 163, 164, 165, 166, 167, 168, 169, 170, 171
                </div>
                <CopyToClipboardButton content="162, 163, 164, 165, 166, 167, 168, 169, 170, 171" />
              </div>

              <div>
                <div className="filial">
                  172 ,173, 174, 175, 176, 177, 178, 180, 181, 182
                </div>
                <CopyToClipboardButton content="172 ,173, 174, 175, 176, 177, 178, 180, 181, 182" />
              </div>

              <div>
                <div className="filial">
                  183, 186, 187, 189, 190, 191, 192, 193, 195, 196
                </div>
                <CopyToClipboardButton content="183, 186, 187, 189, 190, 191, 192, 193, 195, 196" />
              </div>

              <div>
                <div className="filial">
                  197, 601,602, 603, 605, 606, 608, 609, 610, 616
                </div>
                <CopyToClipboardButton content="197, 601,602, 603, 605, 606, 608, 609, 610, 616" />
              </div>

              <div>
                <div className="filial">
                  618, 621, 622, 623, 624, 625, 626, 627, 631, 632, 633, 634,
                  635, 636
                </div>
                <CopyToClipboardButton
                  content="618, 621, 622, 623, 624, 625, 626, 627, 631, 632, 633, 634,
                  635, 636"
                />
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

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-11" />
                <label htmlFor="cb-11">Congelada</label>
              </div>
            </ul>
          </div>

          <p style={{ color: "yellow", marginTop: "20px" }}>
            TODOS OS DIAS FAZER A CONFIG DOS ELETROS APOS OS PROCESSOS.
          </p>
        </main>

        <main className="lojas20_00 camino">
          <nav>
            <h1 className="title">
              CAMINO E CARONE{" "}
              <span style={{ color: "#7a49e5", fontSize: "56px" }}>20h:00</span>{" "}
              <span style={{ color: "#7a49e5", fontSize: "16px" }}>
                SEG-SEX
              </span>
            </h1>

            <div className="nav-right">
              <h3></h3>
              <h3></h3>
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
            </ul>

            <ul>
              <div>
                <div className="filial" style={{ color: "yellow" }}>
                  302, 408
                </div>
                <CopyToClipboardButton content="302, 408" />
              </div>

              <div>
                <div className="filial">
                  300, 302, 303, 305, 59, 63, 64, 188, 194, 198, 199, 604
                </div>
                <CopyToClipboardButton content="300, 302, 303, 305, 59, 63, 64, 188, 194, 198, 199, 604" />
              </div>

              <div>
                <div className="filial">
                  400, 408, 409, 410, 411, 412, 415, 418, 424
                </div>
                <CopyToClipboardButton content="400, 408, 409, 410, 411, 412, 415, 418, 424" />
              </div>

              <div>
                <div className="filial">
                  427, 428, 429, 431, 433, 434, 435, 436{" "}
                </div>
                <CopyToClipboardButton content="427, 428, 429, 431, 433, 434, 435, 436" />
              </div>

              <div>
                <div className="filial">
                  437, 439, 446, 447, 450, 451, 452, 453, 454, 459
                </div>
                <CopyToClipboardButton content="437, 439, 446, 447, 450, 451, 452, 453, 454, 459" />
              </div>
            </ul>

            <ul className="data">
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
            </ul>

            <ul className="checkbox_content">
              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-12" />
                <label htmlFor="cb-12">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-13" />
                <label htmlFor="cb-13">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-14" />
                <label htmlFor="cb-14">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-15" />
                <label htmlFor="cb-15">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-16" />
                <label htmlFor="cb-16">Congelada</label>
              </div>
            </ul>
          </div>
        </main>

        <main className="lojas21_00 camino">
          <nav>
            <h1 className="title">
            CAMINO E CARONE{" "}
              <span style={{ color: "#7a49e5", fontSize: "56px" }}>21h:00</span>{" "}
              <span style={{ color: "#7a49e5", fontSize: "16px" }}>
                SEG-SEX
              </span>
            </h1>

            <div className="nav-right">
              <h3></h3>
              <h3></h3>
            </div>
          </nav>

          <div className="filiais">
            <ul>
              <li>LINHA 5</li>
              <li>LINHA 6</li>
            </ul>

            <ul>

              <div>
                <div className="filial" >
                  301, 414, 423, 425, 432, 438, 445
                </div>
                <CopyToClipboardButton content="301, 414, 423, 425, 432, 438, 445" />
              </div>

              <div>
                <div className="filial" >
                457, 458, 461, 463, 464, 467
                </div>
                <CopyToClipboardButton content="457, 458, 461, 463, 464, 467" />
              </div>
            </ul>

            <ul className="data">
              <li>{obterDataAtual()}</li>
              <li>{obterDataAtual()}</li>
           
            </ul>

            <ul className="checkbox_content">
              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-17" />
                <label htmlFor="cb-17">Congelada</label>
              </div>

              <div className="checkbox-wrapper-47">
                <input type="checkbox" name="cb" id="cb-18" />
                <label htmlFor="cb-18">Congelada</label>
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

const CopyToClipboardButton: React.FC<{ content: string }> = ({ content }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(content)
      .then(() => alert("Conteúdo copiado para a área de transferência"))
      .catch((error) =>
        console.error("Erro ao copiar para a área de transferência: ", error)
      );
  };

  return (
    <button onClick={copyToClipboard}>
      <IoMdCopy />
    </button>
  );
};

export default CopyToClipboardButton;
