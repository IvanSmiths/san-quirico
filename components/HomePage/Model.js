import '@google/model-viewer';

const Model = () => {
  return (
    <>
      <model-viewer
        id="reveal"
        poster="/poster.webp"
        class="sticky"
        camera-orbit="-155.5deg 74.05deg"
        loading="lazy"
        src="/throwel.glb"
        ios-src="/throwel.usdz"
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
