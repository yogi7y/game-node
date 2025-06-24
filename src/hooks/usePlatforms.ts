import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useData<Platform>("/platforms/lists/parents", {
    params: {
      page_size: 100,
    },
  });

export default usePlatforms;
