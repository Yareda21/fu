from livekit.agents import llm


class AssistanceFunc(llm.FunctionContext):
    def __init__(self) -> None:
        super().__init__()