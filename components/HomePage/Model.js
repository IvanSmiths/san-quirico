import '@google/model-viewer';

const Model = () => {
  return (
    <>
      <model-viewer
        id="reveal"
        poster="/poster.png"
        class="sticky"
        loading="lazy"
        src="/3d-model.glb"
        ios-src="/3d-model.usdz"
        alt="3D model of myself"
        camera-controls
        ar
        shadow-intensity="7.4"
        auto-rotate
      ></model-viewer>
    </>
  );
};

export default Model;
