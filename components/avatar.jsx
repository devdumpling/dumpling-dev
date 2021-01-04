export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="rounded-full" alt={name} />      
    </div>
  );
}
