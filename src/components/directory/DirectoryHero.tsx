import { useTemplateData } from "src/common/useTemplateData";
import DirectorySearchBar from "src/components/directory/DirectorySearchBar";
import { FALLBACK_SEARCH_PATH } from "src/config";

interface DirectoryHeroProps {
  brand?: string;
  title: string;
}

const DirectoryHero = (props: DirectoryHeroProps) => {
  const { brand, title } = props;
  const { relativePrefixToRoot, document } = useTemplateData();
  const search_path =
    document?._site?.c_searchPage?.slug || FALLBACK_SEARCH_PATH;

  return (
    <div className="main ">
      <h1 className="mb-6">
        {/* {brand && <div className="Heading Heading--sub mb-6">{brand}</div>} */}
        <div className="Heading Heading--head">
          {title && title !== "Select a State" && (
            <h1>Primanti Bros. Restaurant Locations in {title}</h1>
          )}
          {title === "Select a State" && (
            <span>Primanti Bros. Restaurant Locations</span>
          )}
        </div>
      </h1>
      {/* <DirectorySearchBar
        placeholder="Search by city and state or ZIP code"
        searcherPath={relativePrefixToRoot + search_path}
      /> */}
    </div>
  );
};

export default DirectoryHero;
