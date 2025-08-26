import {
  Box,
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CreditsDropdown from "./CreditDropdown";
import UseCreditos from "./UseCreditos";
import useDataMap from "@/hooks/useDataMap";
import { modelosMock } from "./Modelos/ModelsData";
import { MapData } from "@/interface/MapData";
import dataMap from "@/data/dataMap.json";
function CreditModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dataMapRaw = dataMap as MapData[];
  console.log(UseCreditos(dataMapRaw, modelosMock.models));

  const ModelsCredits = UseCreditos(dataMapRaw, modelosMock.models).filter(
    (c) => c.context === "model"
  );
  const UsersCredits = UseCreditos(dataMapRaw, modelosMock.models).filter(
    (c) => c.context === "user"
  );
  const MapsCredits = UseCreditos(dataMapRaw, modelosMock.models).filter(
    (c) => c.context === "map"
  );

  return (
    <>
      <Text onClick={onOpen}>Terminos y condiciones</Text>

      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.900" color="white" w={"4xl"} h={"90%"}>
          <ModalHeader>Terminos y condiciones</ModalHeader>
          <ModalBody>
            <Box
              sx={{
                maxHeight: "300px",
                overflowY: "auto",
                padding: "1rem",
                border: "1px solid #444",
                backgroundColor: "#111",
                color: "#eee",
              }}
            >
              <p>
                <strong>1. Propósito del sitio</strong>
                <Text>
                  Este sitio presenta la comunidad hispanohablante{" "}
                  <em>WorldOfEditors Oficial</em>, su historia, actividades, y
                  miembros representativos. No se distribuyen recursos
                  directamente desde esta página.
                </Text>
              </p>

              <p>
                <strong>2. Contenido informativo</strong>
                <Text>
                  Los modelos, texturas y recursos visuales mostrados son de
                  carácter expositivo. Provienen de plataformas como{" "}
                  <a href="https://www.hiveworkshop.com/" target="_blank">
                    The Hive Workshop
                  </a>{" "}
                  y conservan sus derechos originales.
                </Text>
              </p>

              <p>
                <strong>3. Derechos de autor y créditos</strong>
                <Text>
                  Todo contenido original (textos, diseño, estructura) pertenece
                  al desarrollador del sitio. Los recursos externos están
                  debidamente acreditados. Si algún autor desea modificar o
                  retirar su contenido, puede contactar al desarrollador.
                </Text>
              </p>

              <p>
                <strong>4. Uso del sitio</strong>
                <Text>
                  El sitio es informativo y comunitario. No se permite el uso
                  comercial ni la redistribución del contenido sin autorización.
                  Compartir enlaces está permitido siempre que se respeten los
                  créditos.
                </Text>
              </p>

              <p>
                <strong>5. Comunidad y colaboración</strong>
                <Text>
                  Las actividades (tutoriales, pruebas de mapas, foros) se
                  realizan en plataformas externas como YouTube, Discord y foros
                  especializados. Este sitio no recopila datos personales.
                </Text>
              </p>

              <p>
                <strong>6. Responsabilidad</strong>
                <Text>
                  El desarrollador no se responsabiliza por el uso indebido del
                  contenido ni por acciones realizadas fuera del sitio. Los
                  enlaces externos no están bajo su control.
                </Text>
              </p>

              <p>
                <strong>7. Modificaciones</strong>
                <Text>
                  Estos términos pueden actualizarse sin previo aviso. Se
                  recomienda revisarlos periódicamente.
                </Text>
              </p>
            </Box>

            {/* Puedes mapear desde un JSON si tienes muchos créditos */}
          </ModalBody>
          <ModalHeader>Créditos de la informacion y recursos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <Box
                sx={{
                  maxHeight: "300px",
                  overflowY: "auto",
                  padding: "1rem",
                  border: "1px solid #444",
                  backgroundColor: "#111",
                  color: "#eee",
                }}
              >
                <CreditsDropdown title="Mapas" credits={MapsCredits} />
                <CreditsDropdown title="Modelos" credits={ModelsCredits} />
                <CreditsDropdown title="Usuarios" credits={UsersCredits} />
              </Box>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} colorScheme="teal">
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreditModal;
