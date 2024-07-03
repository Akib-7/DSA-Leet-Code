/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.


*/
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  var max = Math.max(...candies);
  var result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

import React from "react";
import styled from "styled-components";

const ProgressBar = ({ percent = 12 }) => {
  const cappedPercent = Math.min(Math.max(0, percent), 100);

  return (
    <Wrapper data-testid="wrapper">
      <FilledBar data-testid="progress" percent={cappedPercent} />
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: lightgrey;
`;

const FilledBar = styled.div`
  height: 100%;
  background-color: green;
  border-radius: 5px;
  width: ${(props) => props.percent}%;
`;
