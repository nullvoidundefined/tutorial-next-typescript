import { parseISO, format } from "date-fns";
import styled from "styled-components";

const StyledTime = styled.time`
  color: pink;
`;

type DateStringProps = {
  dateString: string;
};

const Date = ({ dateString }: DateStringProps) => {
  const date: Date = parseISO(dateString);
  return (
    <StyledTime dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </StyledTime>
  );
};

export { Date };
