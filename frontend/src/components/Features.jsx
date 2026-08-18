import FeatureCard from "C:/Users/hp/Documents/Tender-AI/frontend/src/components/FeaturesCard.jsx"


const features = [
  {
    title: "AI Summary",
    description: "Summarize lengthy tenders."
  },
  {
    title: "Risk Analysis",
    description: "Detect important risks."
  },
  {
    title: "Deadline Extraction!!!!",
    description: "Find important dates."
  }
]






function Features() {
  return (
    <section className="feature-grod">
      <h2>Why Tender AI?</h2>

  
 {features.map((feature) => (
  <FeatureCard
   key={feature.title}
    title={feature.title}
    description={feature.description}
  />
))}




    </section>
  )
}

export default Features