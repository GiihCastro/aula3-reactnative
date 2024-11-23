import { StatusBar } from 'expo-status-bar';
import { Button, ButtonText, Container, Input, Label, TitlePage } from './styles';
import { useState } from 'react';

export default function App() {
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [imc, setImc] = useState(null)

  const handleChangeAltura = (text) => {
    setAltura(text);
  }

  const handleChangePeso = (text) => {
    setPeso(text);
  }

  const calculateIMC = () => {
    console.log({ peso, altura });
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);
    
    if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0 || pesoNum <= 0) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
    }

    const IMC = pesoNum / (alturaNum * alturaNum);
    console.log(IMC.toFixed(2));
  }
  

  return (
    <Container>
      <TitlePage>Calculadora IMC</TitlePage>

      <Label>Altura</Label>
      <Input onChangeText={handleChangeAltura} />
      <Label>Peso</Label>
      <Input onChangeText={handleChangePeso} />
      <Button onPress={calculateIMC}>
        <ButtonText>Calcular</ButtonText>
      </Button>
      <StatusBar style="auto" />
    </Container>
  );
}

