function Dashboard() {

  const stats = [
    {
      title: "Total Tenders",
      value: 12
    },
    {
      title: "Active Tenders",
      value: 5
    },
    {
      title: "Deadlines",
      value: 3
    },
    {
      title: "High Risk",
      value: 2
    }
  ]

  const tenders = [
    {
      title: "Construction of Smart City Road",
      status: "Active",
      deadline: "25 Aug 2026"
    },
    {
      title: "Government Hospital Equipment Supply",
      status: "Deadline Soon",
      deadline: "28 Aug 2026"
    },
    {
      title: "Water Treatment Plant Project",
      status: "High Risk",
      deadline: "02 Sep 2026"
    }
  ]

  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>Tender AI</h2>

        <p>Home</p>
        <p>Tenders</p>
        <p>Upload</p>
        <p>History</p>
      </aside>

      <main className="dashboard-main">

        <h1>Dashboard</h1>
        <p>Welcome to Tender AI</p>

        <div className="stats-grid">

          {stats.map((stat) => (
            <div className="stat-card" key={stat.title}>
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          ))}

        </div>

        <div className="recent-tenders">

          <h2>Recent Tenders</h2>

          {tenders.map((tender) => (
            <div className="tender-card" key={tender.title}>

              <h3>{tender.title}</h3>

              <p>Status: {tender.status}</p>

              <p>Deadline: {tender.deadline}</p>

            </div>
          ))}

        </div>

      </main>

    </div>
  )
}

export default Dashboard