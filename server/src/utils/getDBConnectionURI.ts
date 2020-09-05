export function getDBConnectionURI(config): string {
  const user = config.get('db.user');
  const password = config.get('db.password');
  const url = config.get('db.url');
  const port = config.get('db.port');
  const dbName = config.get('db.name');
  const authSource = config.get('db.authSource');

  return `mongodb://${user}:${password}@${url}:${port}/${dbName}?authSource=${authSource}`;
}
