import './index.css';

export function InformationPage () {
    const infos = [
    {
      text: "Amostras solo argiloso com escore Qe-VESS:",
      image: "src/assets/Fotos_info_complementares/IC-01.JPG",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS:",
      image: "src/assets/Fotos_info_complementares/IC-02.JPG",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS:",
      image: "src/assets/Fotos_info_complementares/IC-03.JPG",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS (4,5):",
      image: "src/assets/Fotos_info_complementares/IC-04.JPG",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS (4,5):",
      image: "src/assets/Fotos_info_complementares/IC-05.jpg",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS (4,5):",
      image: "src/assets/Fotos_info_complementares/IC-06.JPG",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS (4,5):",
      image: "src/assets/Fotos_info_complementares/IC-07.JPG",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS (5):",
      image: "src/assets/Fotos_info_complementares/IC-08.JPG",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS (5):",
      image: "src/assets/Fotos_info_complementares/IC-09.JPG",
    },
    {
      text: "Amostras solo argiloso com escore Qe-VESS (5):",
      image: "src/assets/Fotos_info_complementares/IC-10.JPG",
    },
    {
      title: "Amostras solo argiloso com escore Qe-VESS (5):",
      image: "src/assets/Fotos_info_complementares/IC-11.JPG",
    },
  ];

    return (
       <div>
            <div className="container">
                <div className="mb-3 p-3" style={{backgroundColor: '#f3efdc'}}>
                    <h5>
                        A nota da qualidade estrutural do solo pode ser atribuída entre categorias se a camada apresentar características das duas. 
		                Por exemplo, um escore VESS de 1,5 pode ser atribuído se a camada apresentar uma proporção de ≈50% com qualidade estrutural 1, mas também apresentar agregados com qualidade estrutural 2. 
                        As figuras abaixo são exemplos de solos com diferentes escores Qe-VESS para auxiliar o usuário na atribuição da nota da qualidade estrutural do solo.
                        
                        *Ressaltamos que a atribuição da nota não foi realizada somente de forma visual mas tátil também.
                    </h5>
                </div>

                <div className="mt-5">
                    {infos.map((info, index) => (
                        <div key={index} className="justify-content-center">
                            <div className="d-flex justify-content-center mb-3">
                                <h2> {info.text} </h2>
                            </div>

                            <img src={info.image} alt={info.text} className="image-info" />
                            <div className="divisor mt-3 mb-5"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}