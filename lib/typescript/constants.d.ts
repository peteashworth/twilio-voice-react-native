export declare enum Constants {
    'ReactNativeVoiceSDK' = "react-native",
    'ReactNativeVoiceSDKVer' = "1.1.1-rc1",
    'ScopeVoice' = "scopeVoice",
    'ScopeCall' = "scopeCall",
    'ScopeCallMessage' = "scopeCallMessage",
    'ScopeCallInvite' = "scopeCallInvite",
    'VoiceEventError' = "voiceEventError",
    'VoiceEventType' = "type",
    'VoiceErrorKeyError' = "error",
    'VoiceErrorKeyCode' = "code",
    'VoiceErrorKeyMessage' = "message",
    'VoiceEventRegistered' = "voiceEventRegistered",
    'VoiceEventUnregistered' = "voiceEventUnregistered",
    'CallInfoUuid' = "uuid",
    'CallInfoSid' = "sid",
    'CallInfoFrom' = "from",
    'CallInfoTo' = "to",
    'CallInfoIsMuted' = "isMuted",
    'CallInfoIsOnHold' = "isOnHold",
    'CallInfoState' = "state",
    'CallInfoInitialConnectedTimestamp' = "initialConnectedTimestamp",
    'CallStateConnected' = "connected",
    'CallStateConnecting' = "connecting",
    'CallStateDisconnected' = "disconnected",
    'CallStateReconnecting' = "reconnecting",
    'CallStateRinging' = "ringing",
    'CallInviteInfoUuid' = "uuid",
    'CallInviteInfoCallSid' = "callSid",
    'CallInviteInfoFrom' = "from",
    'CallInviteInfoTo' = "to",
    'CallInviteInfoCustomParameters' = "customParameters",
    'CancelledCallInviteInfoUuid' = "uuid",
    'CancelledCallInviteInfoCallSid' = "callSid",
    'CancelledCallInviteInfoFrom' = "from",
    'CancelledCallInviteInfoTo' = "to",
    'CancelledCallInviteInfoCustomParameters' = "customParameters",
    'VoiceEventTypeValueIncomingCallInvite' = "voiceEventTypeValueIncomingCallInvite",
    'VoiceEventSid' = "voiceEventSid",
    'CallMessage' = "callMessage",
    'CallMessageContent' = "content",
    'CallMessageContentType' = "contentType",
    'CallMessageMessageType' = "messageType",
    'JSEventKeyCallMessageInfo' = "callMessage",
    'VoiceEventAudioDevicesUpdated' = "voiceEventAudioDevicesUpdated",
    'AudioDeviceKeyUuid' = "uuid",
    'AudioDeviceKeyName' = "name",
    'AudioDeviceKeyType' = "type",
    'AudioDeviceKeyAudioDevices' = "audioDevices",
    'AudioDeviceKeySelectedDevice' = "selectedDevice",
    'AudioDeviceKeyEarpiece' = "earpiece",
    'AudioDeviceKeySpeaker' = "speaker",
    'AudioDeviceKeyBluetooth' = "bluetooth",
    'CallInviteEventKeyType' = "type",
    'CallInviteEventTypeValueAccepted' = "callInviteEventTypeValueCallInviteAccepted",
    'CallInviteEventTypeValueNotificationTapped' = "callInviteEventTypeValueCallInviteNotificationTapped",
    'CallInviteEventTypeValueRejected' = "callInviteEventTypeValueCallInviteRejected",
    'CallInviteEventTypeValueCancelled' = "callInviteEventTypeValueCallInviteCancelled",
    'CallInviteEventKeyCallSid' = "callSid",
    'CallEventConnected' = "callEventConnected",
    'CallEventConnectFailure' = "callEventConnectFailure",
    'CallEventDisconnected' = "callEventDisconnected",
    'CallEventReconnecting' = "callEventReconnecting",
    'CallEventReconnected' = "callEventReconnected",
    'CallEventRinging' = "callEventRinging",
    'CallEventQualityWarningsChanged' = "callEventQualityWarningsChanged",
    'CallEventCurrentWarnings' = "callEventCurrentWarnings",
    'CallEventPreviousWarnings' = "callEventPreviousWarnings",
    'CallEventMessageFailure' = "callEventMessageFailure",
    'CallEventMessageReceived' = "callEventMessageReceived",
    'CallEventMessageSent' = "callEventMessageSent",
    'Score' = "score",
    'Issue' = "issue",
    'PeerConnectionId' = "peerConnectionId",
    'LocalAudioTrackStats' = "localAudioTrackStats",
    'RemoteAudioTrackStats' = "remoteAudioTrackStats",
    'IceCandidatePairStats' = "iceCandidatePairStats",
    'IceCandidateStats' = "iceCandidateStats",
    'Codec' = "codec",
    'PacketsLost' = "packetsLost",
    'Ssrc' = "ssrc",
    'TrackId' = "trackId",
    'Timestamp' = "timestamp",
    'BytesSent' = "bytesSent",
    'PacketsSent' = "packetsSent",
    'RoundTripTime' = "roundTripTime",
    'AudioLevel' = "audioLevel",
    'Jitter' = "jitter",
    'BytesReceived' = "bytesReceived",
    'Mos' = "mos",
    'TransportId' = "transportId",
    'LocalCandidateId' = "localCandidateId",
    'RemoteCandidateId' = "remoteCandidateId",
    'State' = "state",
    'LocalCandidateIp' = "localCandidateIp",
    'RemoteCandidateIp' = "remoteCandidateIp",
    'Nominated' = "nominated",
    'Writeable' = "writeable",
    'Readable' = "readable",
    'TotalRoundTripTime' = "totalRoundTripTime",
    'CurrentRoundTripTime' = "currentRoundTripTime",
    'AvailableOutgoingBitrate' = "availableOutgoingBitrate",
    'AvailableIncomingBitrate' = "availableIncomingBitrate",
    'RequestsReceived' = "requestsReceived",
    'RequestsSent' = "requestsSent",
    'ResponsesReceived' = "responsesReceived",
    'ResponsesSent' = "responsesSent",
    'RetransmissionsReceived' = "retransmissionsReceived",
    'RetransmissionsSent' = "retransmissionsSent",
    'ConsentRequestsReceived' = "consentRequestsReceived",
    'ConsentRequestsSent' = "consentRequestsSent",
    'ConsentResponsesReceived' = "consentResponsesReceived",
    'ConsentResponsesSent' = "consentResponsesSent",
    'ActiveCandidatePair' = "activeCandidatePair",
    'RelayProtocol' = "relayProtocol",
    'IsRemote' = "isRemote",
    'Ip' = "ip",
    'Port' = "port",
    'Protocol' = "protocol",
    'CandidateType' = "candidateType",
    'Priority' = "priority",
    'Url' = "url",
    'Deleted' = "deleted",
    'PacketsReceived' = "packetsReceived",
    'StateFailed' = "stateFailed",
    'StateFrozen' = "stateFrozen",
    'StateInProgress' = "stateInProgress",
    'StateSucceeded' = "stateSucceeded",
    'StateWaiting' = "stateWaiting",
    'StateUnknown' = "stateUnknown",
    'CallKitMaximumCallsPerCallGroup' = "callKitMaximumCallsPerCallGroup",
    'CallKitMaximumCallGroups' = "callKitMaximumCallGroups",
    'CallKitIncludesCallsInRecents' = "callKitIncludesCallsInRecents",
    'CallKitSupportedHandleTypes' = "callKitSupportedHandleTypes",
    'CallKitIconTemplateImageData' = "callKitIconTemplateImageData",
    'CallKitRingtoneSound' = "callKitRingtoneSound"
}
