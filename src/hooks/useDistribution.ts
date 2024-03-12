export const distribution = (input: string): string => {
  let output = "";

  switch (input) {
    case "notice":
      output = "공지사항";
      break;

    case "all":
      output = "전체 글";
      break;
    case "coding":
      output = "코딩";
      break;
    case "etc":
      output = "기타";
      break;
    default:
      break;
  }

  return output;
};
