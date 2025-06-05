import React from 'react';
import * as d3 from 'd3';

export function ValueNetwork() {
  const svgRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    if (!svgRef.current) return;

    const nodes = [
      { id: 'ワークライフバランス', group: 1 },
      { id: '自己成長', group: 1 },
      { id: '社会貢献', group: 1 },
      { id: '創造性', group: 2 },
      { id: '安定性', group: 2 },
      { id: 'チャレンジ精神', group: 2 },
    ];

    const links = [
      { source: 'ワークライフバランス', target: '安定性', value: 0.8 },
      { source: '自己成長', target: 'チャレンジ精神', value: 0.9 },
      { source: '社会貢献', target: '創造性', value: 0.6 },
      { source: '自己成長', target: '創造性', value: 0.7 },
      { source: 'ワークライフバランス', target: '社会貢献', value: 0.5 },
    ];

    const width = 600;
    const height = 400;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3.forceLink(links).id((d) => d.id),
      )
      .force('charge', d3.forceManyBody().strength(-100))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', (d) => Math.sqrt(d.value) * 2);

    const node = svg.append('g').selectAll('g').data(nodes).join('g');

    node
      .append('circle')
      .attr('r', 5)
      .attr('fill', (d) => (d.group === 1 ? '#ff0066' : '#00cc99'));

    node
      .append('text')
      .text((d) => d.id)
      .attr('x', 8)
      .attr('y', 3)
      .style('font-size', '12px');

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="flex justify-center overflow-hidden">
      <svg ref={svgRef} className="border rounded-lg"></svg>
    </div>
  );
}
