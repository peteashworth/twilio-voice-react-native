import {
  createNativeCallMessageInfo,
  mockCallMessageNativeEvents,
} from '../__mocks__/CallMessage';
import { OutgoingCallMessage } from '../OutgoingCallMessage';
import { NativeEventEmitter } from '../common';
import { Constants } from '../constants';
import type { NativeEventEmitter as MockNativeEventEmitterType } from '../__mocks__/common';
import type { NativeCallMessageEventType } from '../type/CallMessage';

const MockNativeEventEmitter =
  NativeEventEmitter as unknown as typeof MockNativeEventEmitterType;
let MockTwilioError: jest.Mock;
let mockConstructTwilioError: jest.Mock;

jest.mock('../common');
jest.mock('../error/utility', () => {
  MockTwilioError = jest.fn();
  mockConstructTwilioError = jest.fn((mesage, code) => {
    return new MockTwilioError(mesage, code);
  });
  return {
    constructTwilioError: mockConstructTwilioError,
  };
});

beforeEach(() => {
  jest.clearAllMocks();
  MockNativeEventEmitter.reset();
});

describe('OutgoingCallMessage class', () => {
  describe('constructor', () => {
    it('uses the passed CallMessage info', () => {
      const outgoingCallMessage = new OutgoingCallMessage(
        createNativeCallMessageInfo()
      );
      expect({
        // eslint-disable-next-line dot-notation
        content: outgoingCallMessage['_content'],
        // eslint-disable-next-line dot-notation
        contentType: outgoingCallMessage['_contentType'],
        // eslint-disable-next-line dot-notation
        messageType: outgoingCallMessage['_messageType'],
        // eslint-disable-next-line dot-notation
        voiceEventSid: outgoingCallMessage['_voiceEventSid'],
      }).toEqual(createNativeCallMessageInfo());
    });
  });

  describe('.getContent()', () => {
    it('returns the outgoingCallMessageContent value', () => {
      const content = new OutgoingCallMessage(
        createNativeCallMessageInfo()
      ).getContent();
      expect(typeof content).toBe('string');
      expect(content).toBe(createNativeCallMessageInfo().content);
    });
  });

  describe('.getContentType()', () => {
    it('returns the outgoingCallMessageContentType value', () => {
      const contentType = new OutgoingCallMessage(
        createNativeCallMessageInfo()
      ).getContentType();
      expect(typeof contentType).toBe('string');
      expect(contentType).toBe(createNativeCallMessageInfo().contentType);
    });
  });

  describe('.getMessageType()', () => {
    it('returns the outgoingCallMessageType value', () => {
      const messageType = new OutgoingCallMessage(
        createNativeCallMessageInfo()
      ).getMessageType();
      expect(typeof messageType).toBe('string');
      expect(messageType).toBe(createNativeCallMessageInfo().messageType);
    });
  });

  describe('.getSid()', () => {
    it('returns the outgoingVoiceEventSid value', () => {
      const voiceEventSid = new OutgoingCallMessage(
        createNativeCallMessageInfo()
      ).getSid();
      expect(typeof voiceEventSid).toBe('string');
      expect(voiceEventSid).toBe(createNativeCallMessageInfo().voiceEventSid);
    });
  });

  describe('on receiving a valid native event', () => {
    /**
     * Event forwarding tests.
     */

    const listenerCalledWithSent = (listenerMock: jest.Mock) => {
      expect(listenerMock).toHaveBeenCalledTimes(1);
    };

    const listenerCalledWithGenericError = (listenerMock: jest.Mock) => {
      expect(listenerMock).toHaveBeenCalledTimes(1);
      const args = listenerMock.mock.calls[0];
      expect(args).toHaveLength(1);

      const [error] = args;
      expect(error).toBeInstanceOf(MockTwilioError);
    };

    (
      [
        [
          mockCallMessageNativeEvents.failure,
          OutgoingCallMessage.Event.Failure,
          listenerCalledWithGenericError,
        ],
        [
          mockCallMessageNativeEvents.sent,
          OutgoingCallMessage.Event.Sent,
          listenerCalledWithSent,
        ],
      ] as const
    ).forEach(
      ([{ name, nativeEvent }, OutgoingCallMessageEvent, assertion]) => {
        describe(name, () => {
          it('re-emits the native event', () => {
            const outgoingCallMessage = new OutgoingCallMessage(
              createNativeCallMessageInfo()
            );
            const listenerMock = jest.fn();
            outgoingCallMessage.on(OutgoingCallMessageEvent, listenerMock);

            MockNativeEventEmitter.emit(
              Constants.ScopeCallMessage,
              nativeEvent
            );

            assertion(listenerMock);
          });

          it('invokes the correct event handler', () => {
            const callMessage = new OutgoingCallMessage(
              createNativeCallMessageInfo()
            );
            const spy = jest.spyOn(
              callMessage['_nativeEventHandler'], // eslint-disable-line dot-notation
              nativeEvent.type as NativeCallMessageEventType
            );

            MockNativeEventEmitter.emit(
              Constants.ScopeCallMessage,
              nativeEvent
            );

            expect(spy).toHaveBeenCalledTimes(1);
          });
        });
      }
    );
  });
});
