import CardBlog from "../card-blog/CardBlog";
import "./listBlog.css";
import { useState } from "react";

export default function Blogs({ blogs }) {

  const defaultSize = 9;
  const defaultValueIncreased = 9;

  const [listSize, setListSize] = useState(defaultSize);
  const listShow = blogs.slice(0, listSize)

  const updateList = () => {
    listSize + defaultValueIncreased < blogs?.length ? setListSize(listSize + defaultValueIncreased) : setListSize(blogs.length)
  }

  return (
    <div>
      <div className="blogs">
        {
          listShow.map((b) => (
            <CardBlog blog={b} />
          ))
        }
      </div>
      <div className="loadmore-container">
      {
        listSize < blogs?.length ?
          <div className="loadmore-btn can-click" onClick={() => updateList()}>
            Load more
          </div> : listSize >= defaultSize && defaultSize < blogs.length ?
            <div className="loadmore-btn can-click" onClick={() => setListSize(defaultSize)}>
              Hide
            </div> : null
      }
      </div>
    </div>
  );
}
