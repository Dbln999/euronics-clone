interface OrderBy {
  price?: "asc" | "desc";
  createdAt?: "asc" | "desc";
  title?: "asc" | "desc";
}

export const sortOrderBy = (sort: "asc" | "desc" | "date" | "top"): OrderBy => {
  let orderBy = {} as OrderBy;

  if (sort === "asc" || sort === "desc") {
    orderBy = {
      price: sort,
    };
  } else if (sort === "date") {
    orderBy = {
      createdAt: "desc",
    };
  } else {
    orderBy = {
      title: "desc",
    };
  }
  return orderBy;
};
