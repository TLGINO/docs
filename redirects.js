const r = {
  redirects: [
    {
      from: '/nethermind/ethereum-client/configuration',
      to: '/fundamentals/configuration'
    },
    {
      from: '/nethermind/ethereum-client/database',
      to: '/fundamentals/database'
    },
    {
      from: '/nethermind/ethereum-client/json-rpc',
      to: '/interacting/json-rpc-server'
    },
    {
      from: '/nethermind/ethereum-client/logging-configuration',
      to: '/fundamentals/logs'
    },
    {
      from: '/nethermind/ethereum-client/metrics',
      to: '/monitoring/metrics'
    },
    {
      from: '/nethermind/ethereum-client/networks',
      to: '/get-started/installing-nethermind#supported-networks'
    },
    {
      from: '/nethermind/ethereum-client/sync-modes',
      to: '/fundamentals/sync'
    },
    {
      from: '/nethermind/first-steps-with-nethermind/running-nethermind-post-merge',
      to: '/get-started/consensus-clients'
    },
    {
      from: '/nethermind/first-steps-with-nethermind/system-requirements',
      to: '/get-started/system-requirements'
    },
    {
      from: '/nethermind/guides-and-helpers/faq',
      to: '/faq'
    },
    {
      from: '/nethermind/guides-and-helpers/validator-setup/eth2-validator',
      to: '/validators'
    },
    {
      from: '/nethermind/guides-and-helpers/how-to-reduce-database-size',
      to: '/fundamentals/database#reducing-database-size'
    },
    {
      from: '/nethermind/guides-and-helpers/how-to-reduce-database-size/full-pruning',
      to: '/fundamentals/pruning'
    },
    {
      from: '/nethermind/guides-and-helpers/known-issues',
      to: '/troubleshooting'
    }
  ],
  createRedirects: existingPath => {
    if (existingPath.includes('/interacting/json-rpc-ns')) {
      return [
        existingPath.replace('/interacting/json-rpc-ns/', '/nethermind/ethereum-client/json-rpc/')
      ];
    }

    return null;
  }
};

export default r;