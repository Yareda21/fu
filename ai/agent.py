from __future__ import annotations

from livekit.agents import (
    AutoSubscribe,
    JobContext,
    WorkerOptions,
    cli,
    llm
)

from livekit.agents.multimodal import MultimodalAgent
from livekit.plugins import openai
import os


async def entrypoint(ctx: JobContext):
    # Connect to all participants automatically - includes all data types, video, audio, text
    await ctx.connect(auto_subscribe=AutoSubscribe.SUBSCRIBE_ALL)
    # Wait until a participant joins
    await ctx.wait_for_participant()


    model = openai.realtime.RealtimeModel(
        instructions="",
        voice="shimmer",
        temperature=0.8,
        modalities=["audio", "text"]
    )

    # creating an assistance for the model
    
