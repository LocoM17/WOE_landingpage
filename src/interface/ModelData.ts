export interface ModelData {
  nameModel: String;
  typeModel: String;
  description: String;
  downloadLink1: String;
  downloadLink2: String;
  media: {
    img1: String;
    img2: String;
    gif1: String;
    gif2: String;
    linkVideo1: String;
    linkVideo2: String;
  };
  autores: {
    autor1: autor;
    autor2: autor;
  };
}
interface autor {
  name: String;
  information: String;
  contact1: String;
  contact2: String;
}
