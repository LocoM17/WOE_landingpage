export interface MediaItem {
  tipo: "imagen" | "gif" | "video";
  url: string;
  origen?: "mapa" | "modelo";
}
