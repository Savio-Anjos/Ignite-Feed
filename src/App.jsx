import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores recusandae dignissimos consequatur ut debitis impedit delectus reprehenderit reiciendis, aspernatur autem enim nulla magnam neque tempore. Necessitatibus officiis eaque non."
      />
    </div>
  );
}
