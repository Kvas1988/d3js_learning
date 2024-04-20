import { select } from 'd3';


const svg = select("svg.demo1")
  .data([1])
  .join('svg')
  .attr('width', "800")
  .attr('height', "600")
  .style("background", "#D1EDFF")

const data = [
  {id: 0, x: 155, y: 384, r: 20, fill: "#00E1FF"},
  {id: 1, x: 340, y: 238, r: 52, fill: "#FF00AE"},
  {id: 2, x: 531, y: 151, r: 20, fill: "#0000FF"},
  {id: 3, x: 482, y: 347, r: 147, fill: "#7300FF"},
  {id: 4, x: 781, y: 91, r: 61, fill: "#0FFB33"},
]

svg
  .selectAll("circle")
  .data(data, (d) => d.id)
  .join('circle')
  .attr('cx', (d) => d.x)
  .attr('cy', (d) => d.y)
  .attr('r', (d) => d.r)
  .attr('fill', (d) => d.fill)
