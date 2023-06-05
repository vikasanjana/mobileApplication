import React, { useEffect, useState } from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import WidgetSearch from "./components/WidgetSearch";
import ImageBanner from "./components/Widgets/blocks/ImageBanner";
import Slider from "./components/Widgets/blocks/Slider";
import WidgetJson from "@/WidgetsJson/WidgetJson";
import CardGrid from "./components/Widgets/blocks/CardGrid";
import ImageBannerHtml from "@/components/builder/components/BuilderBody/components/widgets/ImageBannerHtml";
import SliderHtml from "@/components/builder/components/BuilderBody/components/widgets/SliderHtml";
import Text from "./components/Widgets/elements/Text";
import WidgetsJson from "@/WidgetsJson/WidgetJson";
import Image from "./components/Widgets/elements/Image";
import Link from "./components/Widgets/elements/Link";
import Map from "./components/Widgets/elements/Map";
import Video from "./components/Widgets/elements/Video";
import Quotes from "./components/Widgets/elements/Quotes";
import ProductListing from "./components/Widgets/blocks/ProductListing";
import Button from "./components/Widgets/blocks/Button";
import AccordionWid from "./components/Widgets/blocks/Accordion";

const LoaderWrapper = () => {
  const [elements, setElements] = useState(null);
  const [blocks, setBlocks] = useState(null);
  useEffect(() => {
    setElements(WidgetsJson.elements);
    setBlocks(WidgetJson.blocks);
  }, []);
  return (
    <Container
      fluid
      className="shadow max-h-screen min-h-50 border py-2 sticky top-24"
    >
      <WidgetSearch />
      <Accordion defaultActiveKey={["elements", "blocks"]} className="my-3">
        {/* Elements */}
        {elements !== null &&
          typeof elements === "object" &&
          Object.keys(elements).length > 0 && (
            <Accordion.Item eventKey="elements">
              <Accordion.Button className="ckDropdownButon">
                Elements
              </Accordion.Button>
              <Accordion.Body>
                <div className="gap-4 flex-wrap flex">
                  <Text
                    title={elements.text.title}
                    icon={elements.text.icon}
                    name="Text"
                    widgetHtml={<ImageBannerHtml />}
                  />
                  <Image
                    title={elements.image.title}
                    icon={elements.image.icon}
                    name="Image"
                    widgetHtml={<ImageBannerHtml />}
                  />
                  <Link
                    title={elements.link.title}
                    icon={elements.link.icon}
                    name="Link"
                    widgetHtml={<ImageBannerHtml />}
                  />
                  <Map
                    title={elements.map.title}
                    icon={elements.map.icon}
                    name="Map"
                    widgetHtml={<ImageBannerHtml />}
                  />
                  <Video
                    title={elements.video.title}
                    icon={elements.video.icon}
                    name="Video"
                    widgetHtml={<ImageBannerHtml />}
                  />
                  <Quotes
                    title={elements.quote.title}
                    icon={elements.quote.icon}
                    name="Quote"
                    widgetHtml={<ImageBannerHtml />}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}

        {/* Blocks */}
        {blocks !== null &&
          typeof blocks === "object" &&
          Object.keys(blocks).length > 0 && (
            <Accordion.Item eventKey="blocks">
              <Accordion.Button className="ckDropdownButon">
                Blocks
              </Accordion.Button>
              <Accordion.Body>
                <div className="gap-4 flex-wrap flex">
                  <ImageBanner
                    title={blocks.banner.title}
                    icon={blocks.banner.icon}
                    name="ImageBanner"
                    widgetHtml={<ImageBannerHtml />}
                  />
                  <CardGrid
                    title={blocks.cardGrid.title}
                    icon={blocks.cardGrid.icon}
                    name="CardGrid"
                  />
                  <ProductListing
                    title={blocks.ProductListing.title}
                    icon={blocks.ProductListing.icon}
                    name="ProductListing"
                    widgetHtml={<SliderHtml />}
                  />
                  <Slider
                    title={blocks.productSlider.title}
                    icon={blocks.productSlider.icon}
                    name="ProductSlider"
                    widgetHtml={<SliderHtml />}
                  />
                  <Button
                    title={blocks.button.title}
                    icon={blocks.button.icon}
                    name="Button"
                    widgetHtml={<SliderHtml />}
                  />
                  <AccordionWid
                    title={blocks.accordion.title}
                    icon={blocks.accordion.icon}
                    name="Accordion"
                    widgetHtml={<SliderHtml />}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}
      </Accordion>
    </Container>
  );
};

export default LoaderWrapper;
