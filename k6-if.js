import http from "k6/http";
import { check } from "k6";

export default function () {
  check(http.get("http://localhost:3000/1?hey=true&ho=true"), {
    "status is 200": r => r.status === 200,
    "body is valid": r => r.body === '{"hey":true,"ho":true}',
  });
};
