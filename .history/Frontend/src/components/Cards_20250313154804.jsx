function Cards({ item }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          {item.new && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          {item.tags?.map((tag, index) => (
            <div key={index} className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
