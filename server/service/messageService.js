import UserRepository from "../repository/impl/user-repo.js";
import ConversationRepository from "../repository/impl/conversation-repo.js";
import BaseError from "../utils/error/baseError.js";

class MessageService {
  constructor(repo) {
    this.message = repo;
    this.user = new UserRepository();
    this.conversation = new ConversationRepository();
  }

  sendMessage = async (datas) => {
    console.log(datas);
    if (!datas.message) {
      throw new BaseError(400, "message must be filled");
    }

    const receiver = await this.user.findOneById(datas.receiverId);

    if (!receiver) {
      throw new BaseError(404, "receiver not found");
    }
    const message = await this.message.sendMessage(datas);

    const conversation = await this.conversation.findOrCreateConversation({ senderId: datas.senderId, receiverId: datas.receiverId, messageId: [message.dataValues.id] });

    if (!conversation[1]) {
      const updatedMessageIds = conversation[0].dataValues.messageIds || [];

      updatedMessageIds.push(message.dataValues.id);

      console.log(updatedMessageIds);

      await this.conversation.updateByParticipants({ messageId: updatedMessageIds, senderId: datas.senderId, receiverId: datas.receiverId });
    }
  };

  getMessage = async (id) => {
    const conversation = await this.conversation.findById(id);
    // console.log(conversation)

    if (!conversation) {
      throw new BaseError(404, "conversation not found");
    }

    const message = await this.message.findById(conversation.dataValues.messageIds);

    return message;
  };

  getConversation = async (id) => {
    const senderId = id;
    // const senderId = "2fc403fd-bee0-4f44-b810-846df62d1ed4";
    // console.log(senderId);

    const conversation = await this.conversation.findByParticipantsId(senderId);
    // console.log(conversation)

    if (conversation) {
      const receiverId = conversation.map((user) => user.participantIds[1]);

      const users = await this.user.findAllById(receiverId);

      // user.data
      const conversationDatas = users.map((user, index) => ({
        ...user,
        conversationId: conversation[index].dataValues.id,
      }));

      return conversationDatas;
    }
  };
}

export default MessageService;
