import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { IAmostra, IAvaliacao, ICamada } from "@/commons/interfaces";
import AmostraService from "@/service/AmostraService";

export function AvaliationPage() {
  const [camadasSelecionadas, setCamadasSelecionadas] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [idSample, setIdSample] = useState(0);

  const { idAvaliation } = location.state || {};

  {/*Formulários*/}
  const [avaliacao, setAvaliacao] = useState<IAvaliacao>({
    configuracaoId: 0,
    nome: "Amostra",
    avaliador: "",
    informacoes: "",
    descricaoManejoLocal: "",
    resumoAvaliacao: "",
    dataCriacao: new Date(),
    dataFim: new Date(),
    escoreMedioGeral: 1,
    totalAmostras: 1,
    status: "",
  });

  const [amostra, setAmostra] = useState<IAmostra>({
    avaliacaoId: idAvaliation,
    nomeAmostra: "",
    numeroCamadas: 0,
    localizacao: "",
    arquivo: "",
    escoreQeVess: 0,
    descricaoManejo: "",
    resumo: "",
    outrasInformacoes: "",
    dataAvaliacao: new Date(),
  });

  const [camadas, setCamadas] = useState<ICamada[]>([
    { amostraId: 0, numeroCamada: 1, comprimentoCm: 0, notaCamada: 0 },
  ]);

  useEffect(() => {
    if (idAvaliation) {
      setAmostra((prevAmostra) => ({
        ...prevAmostra,
        avaliacaoId: idAvaliation,
      }));
    }
  }, [idAvaliation]);

  {/*Função para selecionar nos botões do Vess*/}
  const selecionarCamadas = (quantidade: number) => {
    const novaQuantidade = quantidade === camadasSelecionadas ? quantidade - 1 : quantidade;
    setCamadasSelecionadas(novaQuantidade);

    setCamadas((prev) => {
      const novasCamadas = [...prev];
      while (novasCamadas.length < novaQuantidade) {
        novasCamadas.push({
          amostraId: 0,
          numeroCamada: novasCamadas.length + 1,
          comprimentoCm: 0,
          notaCamada: 0,
        });
      }
      return novasCamadas.slice(0, novaQuantidade);
    });
  };

  {/*OnChanges*/}
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setAvaliacao((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  };

  const onChangeAmostra = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    setAmostra((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  };

  {/*Handlers*/}
  const handleCamadaChange = (event: ChangeEvent<HTMLInputElement>, index: number, field: keyof ICamada) => {
    const { value } = event.target;
    setCamadas((prevCamadas) => {
      const novasCamadas = [...prevCamadas];
      
      (novasCamadas[index][field] as any) = (field === 'comprimentoCm' || field === 'notaCamada')
        ? parseFloat(value) || 0
        : value;
      return novasCamadas;
    });
  };

  const handleAvaliar = async () => {
    amostra.numeroCamadas = camadasSelecionadas.valueOf();

    console.log(idAvaliation);
    const newSampleId = await criaAmostra();

    if (newSampleId) {
      navigate("/avaliationConfirm", {
        state: {
          avaliacao,
          amostra,
          camadas,
          idSample: newSampleId,
        },
      });
    }
  };
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      console.log('Imagem selecionada para upload:', selectedFile.name);
    } else {
      alert('Por favor, selecione uma imagem primeiro!');
    }
  };

  const criaAmostra = async () => {
    try {
      const response = await AmostraService.save(amostra);
      const newId = response.data.id;
      setIdSample(newId);
      console.log("Amostra salva com sucesso!", response);
      return newId;
    } catch (error) {
      console.error("Erro ao salvar avaliação:", error);
      return null;
    }
  };

  return (
    <div>
      <form className="container">
        {/*Cabeçalho*/}
        <div className="d-flex justify-content-center">
          <div className="justify-content-center col-9 col-md-9">
            <div className="justify-content-center" style={{position: 'absolute', width: '80vw'}}>
              <div className="d-flex justify-content-center">
                <input className="p-2 text-name text-center" style={{background: 'white', borderRadius: '10px'}}
                  placeholder="Amostra" maxLength={100} name="nomeAmostra" value={amostra.nomeAmostra} onChange={onChangeAmostra} />
              </div>
            </div>
          </div>

          <div className="justify-content-center col-4 col-md-2" style={{position: 'relative'}}>
            <div className="justify-content-end col-12 col-md-12">
              <div className="d-flex justify-content-center">
                <div className="d-flex rounded-circle justify-content-center"
                  style={{backgroundColor: '#ba9c70', width: '3.3rem', height: '3.3rem', border: '1px solid #873a00'}}>
                  <FontAwesomeIcon icon={faQuestion} size="2x" className="m-2" style={{color:'red'}} />
                </div>
              </div>
              
              <div className="d-flex justify-content-center">
                <p className="mt-3" style={{color:'black'}}> Escores VESS </p>
              </div>
            </div>
          </div>
        </div>

        {/*Botões*/}
        <div className="row justify-content-center mt-2 mb-2">
          <div className="d-flex justify-content-center col-12 col-md-6 mb-1">
            <h5> Quantas camadas de solo deseja avaliar? </h5>
          </div>

          <div className="d-flex justify-content-center mt-2">
            <div className="d-flex justify-content-center col-12 col-md-8 mb-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={num} type="button" onClick={() => selecionarCamadas(num)}
                  className={`d-flex rounded-circle justify-content-center mx-2
                    ${camadasSelecionadas >= num ? "selected-button-layers" : "button-layers"}`}>
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/*Campos*/}
        <div className="justify-content-center">
          <div className="row mt-3">
            <h5> Local/propriedade (GPS): </h5>
            <input id="gps" maxLength={100} className="text-fields" name="localizacao" 
              value={amostra.localizacao} onChange={onChangeAmostra} />
          </div>

          <div className="row mt-3">
            <h5> Avaliador: </h5>
            <input id="avaliador" maxLength={100} className="text-fields" name="avaliador" 
              value={avaliacao.avaliador} onChange={onChange} />
          </div>

          {/*Campos que carregam com os botões*/}
          {camadas.slice(0, camadasSelecionadas).map((camada, index) => (
            <div key={index}>
              <div className="row mt-3">
                <h5>Comprimento camada {index + 1}:</h5>
                <input maxLength={100} className="text-fields"  name="comprimentoCm" value={camada.comprimentoCm} 
                  onChange={(e) => handleCamadaChange(e, index, "comprimentoCm")} />
              </div>

              <div className="row mt-3">
                <h5>Nota camada {index + 1}:</h5>
                <input maxLength={100} className="text-fields" name="notaCamada" value={camada.notaCamada}
                  onChange={(e) => handleCamadaChange(e, index, "notaCamada")} />
              </div>
            </div>
          ))}
        </div>

        {/*Imagens*/}
        <div className={`d-flex justify-content-center mt-4
            ${selectedFile !== null ? "uploaded" : "mb-4"}`}>
          <div className="rounded-circle" style={{backgroundColor: '#ba9c70', width: '50px', height: '50px'}}>
            <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />

            <div className="rounded-circle" style={{backgroundColor: '#ba9c70', width: '50px', height: 
              '50px', cursor: 'pointer'}} onClick={handleUploadClick}>
              <FontAwesomeIcon icon={faCamera} size="2x" className="m-2" style={{color:'black'}} />
            </div>

            {selectedFile && (
              <div className="mt-3 text-center">
                <img src={URL.createObjectURL(selectedFile)} alt="Pré-visualização da imagem"
                  className="image-upload-card"
                />
              </div>
            )}
          </div>
        </div>

        {/*Informações*/}
        <div className="d-flex justify-content-center mt-4 mb-4">
          <div className="row mt-3">
            <h5> Outras informações importantes: </h5>
            <input className="text-infos" name="outrasInformacoes"
              value={amostra.outrasInformacoes} onChange={onChangeAmostra} />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <button type="button" onClick={handleAvaliar} className="button-aval"> AVALIAR </button>
        </div>
      </form>
    </div>
  );
}
