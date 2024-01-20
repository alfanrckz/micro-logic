import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Spinner,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SalaryCalculating: React.FC = () => {
  const [gajiPokok, setGajiPokok] = useState<string>("");
  const [tunjangan, setTunjangan] = useState<string>("");
  const [kewajibanPokok, setKewajibanPokok] = useState<string>("");
  const [totalGajiKotor, setTotalGajiKotor] = useState<number>(0);
  const [totalGajiPokok, setTotalGajiPokok] = useState<number>(0);
  const [totalGajiBersih, setTotalGajiBersih] = useState<number>(0);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const hitungTotalGaji = () => {
    if (!gajiPokok.trim() || !tunjangan.trim() || !kewajibanPokok.trim()) {
        // Memastikan bahwa setiap input tidak kosong setelah dihapus spasi
        alert("Semua field harus diisi!");
        return
    }
    setIsloading(true);

    setTimeout(() => {
      const gaji = parseFloat(gajiPokok) || 0;
      const tunjanganValue = parseFloat(tunjangan) || 0;
      const kewajibanValue = parseFloat(kewajibanPokok) || 0;

      const totalBersih = gaji + tunjanganValue - kewajibanValue;
      setTotalGajiBersih(totalBersih);

      const totalKotor = gaji + tunjanganValue;
      setTotalGajiKotor(totalKotor);

      const totalPokok = gaji;
      setTotalGajiPokok(totalPokok);

      setIsloading(false);
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;
    if (!value.startsWith("0") || value.length === 1) {
      setValue(value);
    }
  };

  return (
    <Container mt={40}>
      <Heading textAlign="center" mb={50}>
        Salary Calculator
      </Heading>
      <Box>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Gaji Pokok</FormLabel>

            <Input
              placeholder="Masukkan Gaji anda"
              type="number"
              required
              value={gajiPokok}
              onChange={(e) => handleInputChange(e, setGajiPokok)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Tunjangan</FormLabel>
            <Input
              placeholder="Masukkan Tunjangan anda"
              type="number"
              required
              value={tunjangan}
              onChange={(e) => handleInputChange(e, setTunjangan)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Kewajiban Pokok</FormLabel>
            <Input
              placeholder="Masukkan Kewajiban Pokok Anda"
              type="number"
              required
              value={kewajibanPokok}
              onChange={(e) => handleInputChange(e, setKewajibanPokok)}
            />
          </FormControl>
          <Button colorScheme="teal" onClick={hitungTotalGaji}>
            Hitung Total Gaji
          </Button>

          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Text>Total Gaji Kotor: Rp. {totalGajiKotor}</Text>
              <Text>Total Gaji Pokok: Rp. {totalGajiPokok}</Text>
              <Text>Total Gaji Bersih: Rp. {totalGajiBersih}</Text>
            </>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default SalaryCalculating;
