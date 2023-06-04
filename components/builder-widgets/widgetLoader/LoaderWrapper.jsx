import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import WidgetSearch from "./components/WidgetSearch";
import ImageBanner from "./components/Widgets/ImageBanner";
import Slider from "./components/Widgets/Slider";
import WidgetJson from "@/WidgetsJson/WidgetJson";
import CardGrid from "./components/Widgets/CardGrid";
import ImageBannerHtml from "@/components/builder/components/BuilderBody/components/widgets/ImageBannerHtml";
import SliderHtml from "@/components/builder/components/BuilderBody/components/widgets/SliderHtml";

const LoaderWrapper = () => {
    const[widgets , setWidget] = useState(null);  
    useEffect(() => {
        setWidget(WidgetJson)
    }, [])
  return (
    <Container fluid className="shadow h-screen border p-2 sticky top-10">
      <WidgetSearch />
      <div className="text">
        <p className="m-0 uppercase my-2 text-gray-400">Text</p>
      </div>
      <div className="gap-4 flex-nowrap flex">
        <ImageBanner title={WidgetJson.banner.title} icon={WidgetJson.banner.icon} name='ImageBanner' widgetHtml={<ImageBannerHtml />} />
        <Slider title={WidgetJson.slider.title} icon={WidgetJson.slider.icon} name='Slider' widgetHtml={<SliderHtml />} />
        <CardGrid title={WidgetJson.grid.title} icon={WidgetJson.grid.icon} name='CardGrid' />
      </div>
    </Container>
  );
};

export default LoaderWrapper;
