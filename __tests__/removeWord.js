import trie from '../src/index';

test('Removing a word from the trie', () => {
  const input = ['dog', 'dogs', 'plane', 'planet'];
  const actual = trie(input);
  const expected = JSON.stringify({
    d: {
      o: {
        g: {
          $: 1,
          s: {
            $: 1
          }
        }
      }
    },
    p: {
      l: {
        a: {
          n: {
            e: {
              t: {
                $: 1
              }
            }
          }
        }
      }
    }
  });

  expect(() => trie(input).removeWord()).toThrow();
  expect(actual.removeWord('plane').dump()).toEqual(expected);
  expect(actual.removeWord('nonword').dump()).toEqual(actual.dump());
});

test('Removing a word from an imported trie', () => {
  const input = {
    d: {
      o: {
        g: {
          $: 1,
          s: {
            $: 1
          }
        }
      }
    },
    p: {
      l: {
        a: {
          n: {
            e: {
              $: 1,
              t: {
                $: 1
              }
            }
          }
        }
      }
    }
  };
  const actual = trie([], input);
  const expected = JSON.stringify({
    d: {
      o: {
        g: {
          $: 1,
          s: {
            $: 1
          }
        }
      }
    },
    p: {
      l: {
        a: {
          n: {
            e: {
              t: {
                $: 1
              }
            }
          }
        }
      }
    }
  });

  expect(() => trie([], input).removeWord()).toThrow();
  expect(actual.removeWord('plane').dump()).toEqual(expected);
  expect(actual.removeWord('nonword').dump()).toEqual(actual.dump());
});