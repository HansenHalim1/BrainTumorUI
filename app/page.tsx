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
            The model runs on our Streamlit backend. Deploy the backend first, then set
            NEXT_PUBLIC_STREAMLIT_URL to embed it here.
          </p>
          <ul className="details">
            <li>Classes: glioma, meningioma, notumor, pituitary</li>
            <li>Preprocessing: grayscale → 3 channels, resize 128×128, normalize mean/std 0.5</li>
            <li>Model: timm tf_efficientnetv2_b3 (transfer learned), head = 4 classes</li>
            <li>Inference hosted separately (Streamlit/HF Space); this page embeds it below.</li>
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
