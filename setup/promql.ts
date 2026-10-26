// Minimal PromQL TextMate grammar for Shiki
export default {
  name: 'promql',
  scopeName: 'source.promql',
  aliases: ['prometheus'],
  patterns: [{ include: '#expr' }],
  repository: {
    expr: {
      patterns: [
        { include: '#comment' },
        { include: '#string' },
        { include: '#grafana-var' },
        { include: '#matchers' },
        { include: '#range' },
        { include: '#grouping' },
        { include: '#keyword' },
        { include: '#aggregation' },
        { include: '#function' },
        { include: '#duration' },
        { include: '#number' },
        { include: '#operator' },
      ],
    },
    comment: { match: '#.*$', name: 'comment.line.number-sign.promql' },
    string: {
      patterns: [
        { begin: '"', end: '"', name: 'string.quoted.double.promql',
          patterns: [{ match: '\\\\.', name: 'constant.character.escape.promql' }] },
        { begin: "'", end: "'", name: 'string.quoted.single.promql',
          patterns: [{ match: '\\\\.', name: 'constant.character.escape.promql' }] },
        { begin: '`', end: '`', name: 'string.quoted.other.raw.promql' },
      ],
    },
    // $__rate_interval, $service, ${namespace}
    'grafana-var': { match: '\\$(?:__\\w+|\\w+|\\{[^}]+\\})', name: 'variable.other.grafana.promql' },
    // {namespace="shop", code=~"5.."}
    matchers: {
      begin: '\\{', end: '\\}',
      beginCaptures: { 0: { name: 'punctuation.section.braces.begin.promql' } },
      endCaptures: { 0: { name: 'punctuation.section.braces.end.promql' } },
      patterns: [
        { include: '#string' },
        { include: '#grafana-var' },
        { match: '=~|!~|!=|=', name: 'keyword.operator.matcher.promql' },
        { match: '[a-zA-Z_]\\w*', name: 'entity.other.attribute-name.label.promql' },
      ],
    },
    // [5m], [1h:30s], [$__rate_interval]
    range: {
      begin: '\\[', end: '\\]',
      patterns: [{ include: '#grafana-var' }, { include: '#duration' }],
    },
    // by (job, le), without (pod), on (...), group_left (...)
    grouping: {
      begin: '\\b(by|without|on|ignoring|group_left|group_right)\\s*(\\()',
      end: '\\)',
      beginCaptures: { 1: { name: 'keyword.other.promql' } },
      patterns: [{ match: '[a-zA-Z_]\\w*', name: 'entity.other.attribute-name.label.promql' }],
    },
    keyword: {
      match: '\\b(?:by|without|on|ignoring|group_left|group_right|bool|offset|and|or|unless|atan2)\\b',
      name: 'keyword.other.promql',
    },
    aggregation: {
      match: '\\b(?:sum|min|max|avg|group|stddev|stdvar|count|count_values|bottomk|topk|quantile|limitk|limit_ratio)\\b(?=\\s*(?:\\(|by\\b|without\\b))',
      name: 'keyword.operator.aggregation.promql',
    },
    function: { match: '\\b[a-z_][a-z0-9_]*(?=\\s*\\()', name: 'support.function.promql' },
    duration: { match: '\\b(?:\\d+(?:ms|s|m|h|d|w|y))+\\b', name: 'constant.numeric.duration.promql' },
    number: {
      match: '\\b(?:0x[0-9a-fA-F]+|\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?|Inf|NaN)\\b',
      name: 'constant.numeric.promql',
    },
    operator: { match: '==|!=|>=|<=|[-+*/%^<>]', name: 'keyword.operator.promql' },
  },
}
