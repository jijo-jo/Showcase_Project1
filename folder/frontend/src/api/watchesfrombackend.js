import { getAllwatches } from "../components/api";

function watchlist(){
       var listarray=[]
       getAllwatches()
       .then((res)=>{
          console.log(res.data);
          listarray=res.data
       }).catch(err=>{console.log(err)})
      return listarray
}

export default watchlist