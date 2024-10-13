import {
  Container,
  DiscountCarousel,
  InfoBlocks,
  News,
  Offers,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <DiscountCarousel />
      <Container>
        <InfoBlocks />
        <Offers />
      </Container>
      <div className={"mt-2"}>
        <img
          src="https://www.euronics.ee/UserFiles/Pictures/9416_EN_EURONICS_AppleiP16Pro_TA_BIG_2560x433px_EE.jpg"
          alt="Banner"
          className={"w-full py-[30px] h-[493px] object-cover"}
        />
      </div>
      <Container>
        <News />
      </Container>
    </>
  );
}
