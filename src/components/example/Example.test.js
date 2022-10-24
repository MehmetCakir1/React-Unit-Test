import { formatUserName } from "../../utils";

describe('utils', () => {
 test('formatUserName adds @ at the beginning of the username', () => {
   expect(formatUserName('jc')).toBe('@jc');
 });
});