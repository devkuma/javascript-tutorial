document.addEventListener("DOMContentLoaded", function () {
  // html의 Json 문자열을 deserialize 한다.
  const gridData = JSON.parse(document.querySelector("#data").textContent);

  const grid = d3.select("#grid")
                 .append("svg")
                 .attr("width", "510px")
                 .attr("height", "510px");

  const row = grid.selectAll()
                  .data(gridData)
                  .enter()
                  .append("g")
                  .attr("class", "row");

  const noSelectedColor = "#ffffff";
  const selectedColor = "#2C93E8";
  const gridStrokeColor = "#222222";

  const column = row.selectAll()
                    .data(d => d)
                    .enter()
                    .append("rect")
                    .attr("class", "square")
                    .attr("x", d => d.x)
                    .attr("y", d => d.y)
                    .attr("width", d => d.width)
                    .attr("height", d => d.height)
                    .style("fill", noSelectedColor)
                    .style("stroke", gridStrokeColor)
                    .on('click', function (d) {
                      d.selected = !d.selected;
                      let cell = d3.select(this);
                      if (d.selected) {
                        cell.style("fill", selectedColor);
                      } else {
                        cell.style("fill", noSelectedColor);
                      }
                    });
});