export interface ExternalResource {
  url: string;
  type: "imagen" | "gif" | "video" | "externo";
  source?: string;
  context: "map" | "model" | "user";
  relatedName: string;
}
