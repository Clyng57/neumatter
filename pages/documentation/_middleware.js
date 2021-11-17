import {NextResponse} from "next/server"

const middleware =  (req, ev) => {
  const os = req.ua.os.name;

  return NextResponse.next()
};

export default middleware;