import { useState, ChangeEvent } from 'react';
import {
  Container,
  Form,
  InputSelectData,
  InputText,
  ButtomContainer,
  ButtomCalcular,
  Resultado,
  AlertError
} from './styled';

interface InputFields {
  peso: string;
  altura: string;
  idade: string;
}

interface DataInput {
  name: string
}

const App: React.FC<any> = () => {
  const [inputData, setInputData] = useState<InputFields>({
    peso: '',
    altura: '',
    idade: ''
  });

  const [sexo, setSexo] = useState<string>('M');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [resultado, setResultado] = useState<number>(0);


  const handleInputData = (name: string, value: string): void => {
    setInputData({ ...inputData, [name]: value })
    console.log(inputData);
  }

  const handleChangeSexo = (event: ChangeEvent<HTMLSelectElement>) => {
    setSexo(event.target.value);
  }

  const handleCalcular = () => {
    setError(false);
    setResultado(0);
    setLoading(true);
    if (inputData.altura === '' || inputData.peso === '' || inputData.idade === '') {
      setError(true);
      setLoading(false);
      return;
    }
    const a: number = parseInt(inputData.altura);
    const p: number = parseInt(inputData.peso);
    const i: number = parseInt(inputData.idade);

    const calculoFinal: number = sexo === 'M' ?
      66 + (13.8 * p) + (5.0 * a) - (6.8 * i)
      :
      655 + (9.6 * p) + (1.9 * a) - (4.7 * i)

    setLoading(false);
    setResultado(
      Math.floor(calculoFinal)
    );
  }

  const Loading = () => {
    return <p>Calculando...</p>
  }

  const ErrorAlert = () => {
    return <AlertError>
      Preencha todos os campos
    </AlertError>
  }

  return (
    <Container>
      <Form>
        <InputText
          name='peso'
          id='peso'
          value={inputData.peso}
          onChange={(e): void => handleInputData('peso', e.target.value)}
          placeholder='Digite seu peso'
        />

        <InputText
          name='altura'
          id='altura'
          value={inputData.altura}
          onChange={(e): void => handleInputData('altura', e.target.value)}
          placeholder='Digite sua altura em centimetros'
        />

        <InputText
          name='idade'
          id='idade'
          value={inputData.idade}
          onChange={(e): void => handleInputData('idade', e.target.value)}
          placeholder='Digite sua idade'
        />

        <InputSelectData
          name='sexo'
          id='sexo'
          value={sexo}
          onChange={handleChangeSexo}
        >
          <option value='M'>Masculino</option>
          <option value='F'>Feminino</option>
        </InputSelectData>
        <ButtomContainer>
          <ButtomCalcular onClick={handleCalcular}>
            Calcular
          </ButtomCalcular>
        </ButtomContainer>
      </Form>

      {loading === false ?
        <Resultado>
          {error === true
            ?
            <ErrorAlert />
            :
            <></>}
          <h3>Taxa de metaboliasmo basal em respouso = {resultado} Kcal</h3>
        </Resultado>
        :
        <Loading />

      }

    </Container>
  );
}

export default App;
