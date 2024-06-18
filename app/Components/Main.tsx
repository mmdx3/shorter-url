import UrlShorter from "./UrlShorter";
import AdvancedStatistic from "./AdvancedStatistic";

const Main = () => {
  return (
    <div className="bg-gray-200 mt-8 relative w-full pb-60">
      {/* URL Shortener Section */}
      <UrlShorter />

      {/* Advanced Statistics Section */}
      <AdvancedStatistic />
    </div>
  );
};

export default Main;
