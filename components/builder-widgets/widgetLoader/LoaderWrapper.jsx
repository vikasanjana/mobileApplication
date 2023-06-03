import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import WidgetSearch from "./components/WidgetSearch";
import ImageBanner from "./components/Widgets/ImageBanner";
import Slider from "./components/Widgets/Slider";
import WidgetJson from "@/WidgetsJson/WidgetJson";
import CardGrid from "./components/Widgets/CardGrid";

const LoaderWrapper = () => {
    const[widgets , setWidget] = useState(null);  
    useEffect(() => {
        setWidget(WidgetJson)
    }, [])
  return (

    <Container fluid className="shadow h-screen border p-2">
      <WidgetSearch />
      <div className="text">
        <p className="m-0 uppercase my-2 text-gray-400">Text</p>
      </div>
      <div className="gap-4 flex-nowrap flex">
        <ImageBanner title={WidgetJson.banner.title} icon={WidgetJson.banner.icon} name='ImageBanner' />
        <Slider title={WidgetJson.slider.title} icon={WidgetJson.slider.icon} name='Slider' />
        <CardGrid title={WidgetJson.grid.title} icon={WidgetJson.grid.icon} name='CardGrid' />
      </div>
    </Container>
  );
};

export default LoaderWrapper;
