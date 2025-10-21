export default function CardList({ items }) {
  return items.map((item) => <article key={item.id}>{item.title}</article>);
}
