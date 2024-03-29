import { HoursStatus } from "@yext/sites-react-components";
import { Address } from "@yext/sites-components";
import type { LiveAPIProfile, LocationProfile } from "src/types/entities";
import { CardComponent } from "src/models/cardComponent";
import { useTemplateData } from "src/common/useTemplateData";
import { MaybeLink } from "src/components/common/MaybeLink";

const DirectoryCard: CardComponent<
  LocationProfile | LiveAPIProfile<LocationProfile>
> = function DirectoryCard(props): JSX.Element {
  const { profile } = props;
  const { relativePrefixToRoot } = useTemplateData();

  return (
    <div className="Directorycard bg-white px-6 py-8 border h-full">
      <div className="directory-name">
        <MaybeLink
          className="Link directorycard-name  hover:underline hover:text-pb-red-500"
          href={profile.slug ? relativePrefixToRoot + profile.slug : ""}
        >
          {profile.name}
        </MaybeLink>
      </div>

      {profile.address && (
        <div className="text-sm">
          {profile.address.line1} {profile.address.line2}
          <br />
          {profile.address.city}, {profile.address.region}{" "}
          {profile.address.postalCode}
        </div>
      )}
      {profile.hours && (
        <div className="mb-4 text-sm">
          <HoursStatus hours={profile.hours} />
        </div>
      )}
    </div>
  );
};

export default DirectoryCard;
