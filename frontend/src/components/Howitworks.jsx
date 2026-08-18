const steps = [
  {
    number: 1,
    title: "Upload",
    description: "Upload your tender PDF."
  },
  {
    number: 2,
    title: "Analyzeeeeeeeee",
    description: "AI analyzes the tender and extracts important information."
  },
  {
    number: 3,
    title: "Get Insights",
    description: "View summaries, deadlines, eligibility, and risks."
  }
]

function HowItWorks() {
  return (
    <section className="how-section">
      <h2>How Tender AI Works</h2>

      <div className="steps">
        {steps.map((step) => (
          <div key={step.number}>
            <h3>{step.number}. {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks