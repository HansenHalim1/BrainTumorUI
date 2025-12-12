const iframeSrc =
  process.env.NEXT_PUBLIC_STREAMLIT_URL || "https://your-streamlit-url.example.com";

export default function HomePage() {
  return (
    <main className="page">
      <div className="hero">
        <div>
          <p className="eyebrow">Brain Tumor Detector</p>
          <h1>Upload MRI scans and get instant predictions</h1>
          <p className="lede">
            Powered by a transfer-learned tf_efficientnetv2_b3 model hosted on Streamlit,
            embedded directly below for seamless use.
          </p>
          <ul className="details">
            <li>Classes: glioma, meningioma, notumor, pituitary</li>
            <li>Preprocessing: grayscale → 3 channels, resize 128×128, normalize mean/std 0.5</li>
            <li>Model: timm tf_efficientnetv2_b3 (transfer learned), head = 4 classes</li>
          </ul>
        </div>
      </div>

      <section className="embed">
        <div className="frame-wrapper">
          <iframe
            title="Brain Tumor Detector"
            src={iframeSrc}
            allow="clipboard-write; camera; microphone"
          />
        </div>
      </section>
    </main>
  );
}
